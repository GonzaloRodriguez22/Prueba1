// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Registro from './screens/Registro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#24223b', // Cambia este color para la barra de navegación
          },
          headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
          headerTitleStyle: {
            fontWeight: 'bold', // Cambia el estilo del texto
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Iniciar Sesión' }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ title: 'Registro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
