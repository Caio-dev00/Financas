import React, {useContext} from "react";
import { Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";

export default function Profile(){
    const {user, signOut} = useContext(AuthContext);

    const navigation = useNavigation();

    return(
        <Container>
            <Header title="Perfil"/>

            <Message>
                Hey, Bem-Vindo de volta!
            </Message>

            <Name numberOfLines={1}>
                {user.name}
            </Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    )
}