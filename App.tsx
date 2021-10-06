/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import ExploreIcon from './assets/icons/explore.svg';
import WishIcon from './assets/icons/wish.svg';
import TripsIcon from './assets/icons/trips.svg';
import InboxIcon from './assets/icons/inbox.svg';
import ProfileIcon from './assets/icons/profile.svg';

import Home from './screens/Explore/Home/Home';
import Trips from './screens/Trips/Trips';
import Inbox from './screens/Inbox/Inbox';
import Profile from './screens/Profile/Profile';
import RipplePressable from './components/ui/RipplePressable';
import Wishlists from './screens/Wishlists/Wishlists';
import AppText from './components/ui/AppText';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ExploreStack = createNativeStackNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        const style = [styles.tabIcon, focused && styles.tabIconActive] as any;
        switch (route.name) {
          case 'Explore':
            return <ExploreIcon style={style} />;
          case 'Wishlists':
            return <WishIcon style={style} />;
          case 'Trips':
            return <TripsIcon style={style} />;
          case 'Inbox':
            return <InboxIcon style={style} />;
          case 'Log In':
            return <ProfileIcon style={style} />;
          default:
            return null;
        }
      },
      tabBarInactiveTintColor: '#B0B0B0',
      tabBarActiveTintColor: '#000',
      tabBarButton: (props) => (
        <RipplePressable style={styles.tabBarButtton} borderless {...props} />
      ),
      tabBarLabel: ({ focused, color }) => (
        <AppText style={[{ color }, styles.tabLabel, focused && styles.tabLabelActive]}>
          {route.name}
        </AppText>
      ),
    })}
  >
    <Tab.Screen name="Explore" component={ExploreStackScreen} />
    <Tab.Screen name="Wishlists" component={Wishlists} />
    <Tab.Screen name="Trips" component={Trips} />
    <Tab.Screen name="Inbox" component={Inbox} />
    <Tab.Screen name="Log In" component={Profile} />
  </Tab.Navigator>
);

const ExploreStackScreen = () => (
  <ExploreStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ExploreStack.Screen name="Home" component={Home} />
  </ExploreStack.Navigator>
);

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    color: '#B0B0B0',
    width: 24,
    height: 24,
  },
  tabBarButtton: {
    flex: 1,
  },
  tabIconActive: {
    color: '#FF385C',
  },
  tabLabel: {
    marginTop: -5,
    marginBottom: 5,
    fontSize: 10,
    textAlign: 'center',
    color: '#222222',
  },
  tabLabelActive: {
    fontWeight: '600',
  },
});

export default App;
