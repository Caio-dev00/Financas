import React, { useMemo } from "react";
import { Container, Label, Balance } from "./styles";

export default function BalanceItem({data}){

    const labelName = useMemo(() => {
        if(data.tag === "saldo"){
            return{
                label: 'Saldo Atual',
                color: '3b3dbf'
            }
        }else if(data.tag === "receita"){
            return{
                label: 'Receitas de hoje',
                color: '00b94a'
            }
        }else{
            return{
                label: 'Saidas de hoje',
                color: 'ef463a'
            }
        }

    }, [data])

    

    return(
        <Container bg ={labelName.color}>
            <Label>{labelName.label}</Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    )
}