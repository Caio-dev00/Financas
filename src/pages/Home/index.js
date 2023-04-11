import React, {useContext, useEffect, useState} from "react";

import Header from "../../components/Header";
import { 
    Background,
    ListBalance,
    Area,
    Title,
    List
} from "./styles";

import api from "../../services/api";
import format from "date-fns/format";
import { useIsFocused } from "@react-navigation/native";
import { TouchableOpacity, Modal } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';

import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";


export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMovents, setDateMovents] = useState(new Date());
    const [movements, setMovements] = useState([]);
    const [modal, setModal] = useState(false);



    useEffect(() => {
        let isActive = true;

        async function getMovements(){
            //let dateFormated = format(dateMovents, 'dd/MM/yyyy');

            let date = new Date(dateMovents)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, 'dd/MM/yyyy');

            console.log(dateFormated);

            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            if(isActive){
                setMovements(receives.data);
                setListBalance(balance.data);
            }
        }
        getMovements();

        return () => isActive = false;

    }, [isFocused, dateMovents])




    async function handleDelete(id){
        try{
            await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })
            
            setDateMovents(new Date())
        }catch(err){
            console.log(err);
        }
    }


    function filterDateMovements(dateSelected){
        setDateMovents(dateSelected);
    }   


    return(
        <Background>
           <Header title="Minhas movimentações"/>

           <ListBalance 
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.tag}
            renderItem={({item}) => <BalanceItem data={item}/>}
           />

           <Area>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Icon name="event" color="#121212" size={30}/>
            </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
           </Area>

           <List
            data={movements}
            keyExtractor={item => item.id}
            renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDelete}/>}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}
           />

           <Modal visible={modal} animationType="fade" transparent={true}>
            
            <CalendarModal
                setVisible={() => setModal(false)}
                handleFilter={filterDateMovements}
            />

           </Modal>

        </Background>


    )
}