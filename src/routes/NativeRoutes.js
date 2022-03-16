import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '../component/navigation/RootNavigation';
import {NativeBaseProvider} from 'native-base';

const NativeRoutes = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default NativeRoutes;
