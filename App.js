import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './src/navigation/HomeNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux-store/store';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <HomeNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
