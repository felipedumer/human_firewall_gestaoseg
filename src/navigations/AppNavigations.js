import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaInicial from '../screens/TelaInicial';
import TelaAtaquesPishing from '../screens/AtaquesPishing';
import TelaSenhasSeguras from '../screens/SenhasSeguras';
import TelaDadosPessoais from '../screens/DadosPessoais';
import TelaCrimesInternet from '../screens/CrimesInternet';
import TelaQuiz from '../screens/Quiz';

const AuthStack = createStackNavigator();

const AppNavigations = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Tela Inicial"
        options={{headerShown: false}}
        component={TelaInicial}
      />
      <AuthStack.Screen
        name="Ataques, pishing..."
        options={{headerShown: true}}
        component={TelaAtaquesPishing}
      />
      <AuthStack.Screen
        name="Senhas seguras..."
        options={{headerShown: true}}
        component={TelaSenhasSeguras}
      />
      <AuthStack.Screen
        name="Dados pessoais, LGPD..."
        options={{headerShown: true}}
        component={TelaDadosPessoais}
      />
      <AuthStack.Screen
        name="Crimes na internet, leis..."
        options={{headerShown: true}}
        component={TelaCrimesInternet}
      />
      <AuthStack.Screen
        name="Quiz"
        options={{headerShown: true}}
        component={TelaQuiz}
      />
    </AuthStack.Navigator>
  );
};

export default AppNavigations;
