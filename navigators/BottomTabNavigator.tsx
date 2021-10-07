import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import ExploreIcon from '../assets/icons/explore.svg';
import WishIcon from '../assets/icons/wish.svg';
import TripsIcon from '../assets/icons/trips.svg';
import InboxIcon from '../assets/icons/inbox.svg';
import ProfileIcon from '../assets/icons/profile.svg';

import ExploreStackNavigator from './ExploreStackNavigator';
import Trips from '../screens/Trips/Trips';
import Inbox from '../screens/Inbox/Inbox';
import Profile from '../screens/Profile/Profile';
import RipplePressable from '../components/ui/RipplePressable';
import Wishlists from '../screens/Wishlists/Wishlists';
import AppText from '../components/ui/AppText';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC<{}> = () => (
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
        <AppText
          style={[{ color }, styles.tabLabel, focused && styles.tabLabelActive]}
        >
          {route.name}
        </AppText>
      ),
    })}
  >
    <Tab.Screen name="Explore" component={ExploreStackNavigator} />
    <Tab.Screen name="Wishlists" component={Wishlists} />
    <Tab.Screen name="Trips" component={Trips} />
    <Tab.Screen name="Inbox" component={Inbox} />
    <Tab.Screen name="Log In" component={Profile} />
  </Tab.Navigator>
);

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

export default BottomTabNavigator;
