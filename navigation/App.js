import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../components/MainScreen';
import DrawerScreen from './DrawerScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bmi"
            component={DrawerScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
