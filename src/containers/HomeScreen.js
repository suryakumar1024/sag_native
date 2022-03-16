import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Search from './tabs/Search';
import MyGames from './tabs/MyGames';
import Messages from './tabs/Messages';
import Profile from './tabs/Profile';

import Iconf from 'react-native-vector-icons/Feather';
import IconIi from 'react-native-vector-icons/Ionicons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const homeOn = <IconIi name={'home-sharp'} size={30} color= "#213cb7" />
const homeOff = <IconIi name={"home-outline"} size={30} color= "#9b9b9b" />

const searchOn = <IconFa name='search' size={30} color= "#213cb7" />
const searchOff=<Iconf name='search' size={30} color= "#9b9b9b" />

const myGamesOn = <IconIi name='football' size={30} color= "#213cb7" />
const myGamesOff = <IconIi name='football-outline' size={30} color= "#9b9b9b" />

const messagesOn = <IconMci name='message-text' size={30} color= "#213cb7" />
const messagesOff = <IconMci name='message-text-outline' size={30} color= "#9b9b9b" />

const profileOn = <IconFa name='id-card' size={30} color= "#213cb7" />
const profileOff = <IconFa name='id-card-o' size={30} color= "#9b9b9b" />

const HomeScreen = () => {
  return (
    <Tab.Navigator   screenOptions={ {headerShown: false,tabBarStyle:{height:65,paddingBottom:5},tabBarLabelStyle:{fontSize:15} }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused?homeOn:homeOff
          },
        }}
      />
      <Tab.Screen name="search" component={Search}
       options={{
        tabBarIcon: ({focused}) => {
          return focused?searchOn:searchOff
        },
      }}
      />
      <Tab.Screen name="myGames" component={MyGames}
       options={{
        tabBarIcon: ({focused}) => {
          return focused?myGamesOn:myGamesOff 
        },
      }}
      />
      <Tab.Screen name="messages" component={Messages}
       options={{
        tabBarIcon: ({focused}) => {
          return focused?messagesOn:messagesOff
        },
      }}
      />
      <Tab.Screen name="profile" component={Profile}
       options={{
        tabBarIcon: ({focused}) => {
          return focused?profileOn:profileOff
        },
      }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
