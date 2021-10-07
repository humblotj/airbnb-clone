import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './navigators/AppNavigator';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App: React.FC<{}> = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={Theme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
