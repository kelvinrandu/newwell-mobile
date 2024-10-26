import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardScreen} from "../src/screens";


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    // <Stack.Navigator initialRouteName="Login">
    <Stack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
   

    </Stack.Navigator>
  );
}