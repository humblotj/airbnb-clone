import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Explore/Home/Home';

const ExploreStack = createNativeStackNavigator();

const ExploreStackNavigator: React.FC<{}> = () => (
  <ExploreStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ExploreStack.Screen name="Home" component={Home} />
  </ExploreStack.Navigator>
);

export default ExploreStackNavigator;
