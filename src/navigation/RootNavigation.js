import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../containers/HomeScreen';
import HomeScreen from '../containers/HomeScreen';
import Host from '../containers/Host';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen  name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Host" component={Host} />
    {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  )
}

export default RootNavigation