import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabScreens from './TabScreens';
import DrawerScreen2 from '../components/drawer-screens/DrawerScreen2';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="drawerHome" component={TabScreens} />
      <Drawer.Screen name="drawer screen 2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
