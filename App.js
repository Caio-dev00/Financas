import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';
import AuthProvider from './src/contexts/auth';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#f0f4ff' hidden/>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

