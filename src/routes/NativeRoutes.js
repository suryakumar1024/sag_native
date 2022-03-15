import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import HomeNavigation from '../component/navigation/HomeNavigation';


const NativeRoutes = () => {
  return (
      <NavigationContainer>
        <NativeBaseProvider>
          <HomeNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
  );
};

export default NativeRoutes;