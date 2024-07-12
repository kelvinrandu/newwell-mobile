import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import {Login } from './src/screens/Login'
import {Otp} from './src/screens/Otp'
import Dashboard from './src/screens/Dashboard'
import Marketing from './components/Marketing';
import MusicLibrary from './components/MusicLibrary';
import Services from './components/Services';
import Stats from './components/Stats';
import CreateRelease from './components/CreateRelease';
import Notifications from './components/Notifications';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login />
  );
}
function OtpScreen({ navigation }) {
  return (
    <Otp />
  );
}
function DashboardScreen({ navigation }) {
  return (
    <Dashboard />
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
              <Stack.Navigator    initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
          <Stack.Screen name="LoginPage" component={LoginScreen} />
          <Stack.Screen name="OtpPage" component={OtpScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}