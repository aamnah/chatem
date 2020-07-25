import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from '../navigation/AuthStack'

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

/*
NOTES

- NavigationContainer is a component that manages the navigation tree. It allows the screen components to refer to the `navigation` prop reference

*/
