import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthProvider,useAuth } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { ToastProvider } from 'react-native-toast-notifications'

/**
 * Wrap all providers here
 */
const TOKEN_KEY = "jwt";
const Stack = createStackNavigator();
export default function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
 
  const{authState,onLogut,onLogin,isLoggedIn,isLoggedInRef } =useAuth();
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
  }, 1000);
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("TOKEN index ===>", token);
      if (token) {
        setIsLoggedIn(true);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    loadToken();
    return () => clearInterval(interval);
  }, [count]);
  console.log('index',isLoggedInRef,isLoggedIn)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ToastProvider>

  
    <AuthProvider>
      <NavigationContainer>
        {loggedIn ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
    </ToastProvider>
  );
}