import React, {useState, useContext} from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { Background, Container, Logo, AreInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, loadingAuth} = useContext(AuthContext);


  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>

        <Container
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
          <Logo
            source={require('../../assets/Logo.png')}
          />

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

          <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
            {
              loadingAuth ?(
                <ActivityIndicator size={20} color='#fff'/>
              ):(
                <SubmitText>Acessar</SubmitText>
              )
            }
      
          </SubmitButton>

          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta!</LinkText>
          </Link>

        </Container>

    </Background>
  )
}
