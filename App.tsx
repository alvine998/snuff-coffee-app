import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/pages/splash'
import Intro from './src/pages/intro'
import Login from './src/pages/login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/pages/home'
import BottomTab from './src/components/BottomTab'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Intro' component={Intro} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}