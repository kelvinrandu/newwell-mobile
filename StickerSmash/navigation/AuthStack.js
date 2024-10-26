import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen,OtpScreen,StartScreen,RegisterScreen} from "../src/screens";

// import { LoginScreen, StartScreen, RegisterScreen ,ResetPasswordScreen} from "../screens";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    // <Stack.Navigator initialRouteName="Login">
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
              <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />

      <Stack.Screen name="Signup" component={RegisterScreen} />
      <Stack.Screen name="OtpPage" component={OtpScreen} />
      {/* <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      /> */}
    </Stack.Navigator>
  );
}