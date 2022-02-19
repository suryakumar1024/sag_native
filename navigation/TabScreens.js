import React from 'react';
import BmiScreen from '../components/tab-screens/BmiScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OtherScreen from '../components/tab-screens/OtherScreen';

const Tab = createBottomTabNavigator();

const screenOptions={
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 20,
    left: 20,
    right: 20,
    elevation: 5,
  },
}
const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}>
      <Tab.Screen name="calculator" option={{}} component={BmiScreen} />
      <Tab.Screen name="other" component={OtherScreen} />
    </Tab.Navigator>
  );
};

export default TabScreens;
