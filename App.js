import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import BmiScreen from './components/BmiScreen';
import MainScreen from './components/MainScreen';

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
          component={BmiScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default App;
