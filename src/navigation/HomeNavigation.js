import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductList from '../screens/ProductList';
import BillPage from '../screens/BillPage';
const stack = createStackNavigator();

const HomeNavigation = () => {
  return (
  <stack.Navigator screenOptions={{headerShown:false}} >

      <stack.Screen  name='products' component={ProductList}/>
      <stack.Screen  name='billPage' component={BillPage}/>

  </stack.Navigator>
  )
}

export default HomeNavigation;