import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigation from './src/navigation/HomeNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>
  )
}

export default App