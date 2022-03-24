import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../containers/HomeScreen';
import Host from '../../containers/Host';
import VenueGallery from '../../containers/VenueGallery';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Host" component={Host} />
      <Stack.Screen name='venueGallery' component={VenueGallery} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
