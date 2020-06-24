import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaPage from './pages/ListaPage';
import CadastroPage from './pages/CadastroPage';
// import {StatusBar} from 'react-native'


const Routes = createStackNavigator();

// StatusBar.setBarStyle('light-content');

export default function App() {

  return (
    <NavigationContainer>
        <Routes.Navigator
          // screenOptions={{
          //   headerStyle: {backgroundColor: '#000'},
          //   cardStyle: {backgroundColor: '#000'},
          //   headerTintColor: '#FFF'
          // }}
            // initialRouteName="Cadastro"
          >
            <Routes.Screen name="Lista" component={ListaPage}/>
            <Routes.Screen name="Cadastro" component={CadastroPage}/>
        </Routes.Navigator>
    </NavigationContainer>
  );
}