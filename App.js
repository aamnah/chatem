import 'react-native-gesture-handler' // needs to be at top
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'

import theme from './PaperTheme'
import Home from './src/components/Home'
import { View, Text } from 'react-native'

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App
