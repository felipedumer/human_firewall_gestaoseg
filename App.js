import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigations from './src/navigations/AppNavigations';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigations />
    </NavigationContainer>
  );
};

export default App;
