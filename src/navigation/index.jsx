import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import Routes from './Routes'
import theme from '../../PaperTheme'
import { StatusBar } from 'react-native'
import Home from '../components/Home'
export default function Providers() {
  return (
    <PaperProvider them={theme}>
      <Routes />
    </PaperProvider>
  )
}

/*
The PaperProvider component provides the theme to all the components in the framework. It also acts as a portal to components that need to be rendered at the top level.

This is a mandatory step. The reason we create a separate Providers component and wrap Routes and not the App component (as mentioned in official docs here) is that 
there are going to be some custom providers in this app as we build it out. So to manage all the providers, it’s better if you create a separate file.
*/
