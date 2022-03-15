import React from 'react';
import {Provider} from 'react-redux';
import NativeRoutes from './src/routes/NativeRoutes';
import {store} from './src/store';


const App = () => {
  return (
    <Provider store={store}>
      <NativeRoutes />
    </Provider>
  );
};

export default App;
