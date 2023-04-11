import React, {useContext, useState} from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import {Background, Container, AreInput, Input ,SubmitButton, SubmitText} from '../../pages/SignIn/styles';

import { AuthContext } from '../../contexts/auth';




export default function SignUp() {

  const {signUp, loadingAuth} = useContext(AuthContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSignUp(){
    if(nome === '' || email === '' || password === ''){
      alert('Preencha todos os campos!');
      return;
    }

    signUp(nome, email, password);
  }

  return (
    <Background>

        <Container
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
          <AreInput>
            <Input 
            placeholder="Seu nome" 
            value={nome}
            onChangeText={(text) => setNome(text)}
            />
          </AreInput>

          <AreInput>
            <Input 
            placeholder="Seu email" 
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
          </AreInput>

          <AreInput>
            <Input 
            placeholder="Sua senha" 
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            />
          </AreInput>

          <SubmitButton onPress={handleSignUp}>
            {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF" />
              ):(
                <SubmitText>Cadastrar</SubmitText>
              )
            }
           
          </SubmitButton>

        </Container>

    </Background>
  )
}
