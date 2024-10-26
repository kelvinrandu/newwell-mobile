import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { useAuth } from "./context/AuthContext";

import Routes from "./navigation/index"


const Stack = createStackNavigator()

export default function App() {
  const{authState,onLogut,isLoggedIn} =useAuth();
  console.log('auth state-->',authState,isLoggedIn)

  return (
  <Routes />
  )

}