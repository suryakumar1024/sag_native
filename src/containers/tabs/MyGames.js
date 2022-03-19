import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Upcoming from './Upcoming';
import Past from './Past';
const Tab = createMaterialTopTabNavigator();

const MyGames = () => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="upcoming" component={Upcoming} />
      <Tab.Screen name="past" component={Past} />
    </Tab.Navigator>
  );
}
  

export default MyGames

const styles = StyleSheet.create({})