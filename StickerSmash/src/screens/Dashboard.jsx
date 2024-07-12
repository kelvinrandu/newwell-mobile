import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../../components/Home';
import Marketing from '../../components/Marketing';
import MusicLibrary from '../../components/MusicLibrary';
import Services from '../../components/Services';
import Stats from '../../components/Stats';
import CreateRelease from '../../components/CreateRelease';
import Notifications from '../../components/Notifications';
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

function NotificationsScreen({ navigation }) {
  return (
    <Notifications />
  );
}
function CreateReleaseScreen({ navigation }) {
  return (
    <CreateRelease />
  );
}
function MusicLibraryScreen({ navigation }) {
  return (
    <MusicLibrary />
  );
}
function ServicesScreen({ navigation }) {
  return (
    <Services />
  );
}
function StatsScreen({ navigation }) {
  return (
    <Stats />
  );
}
function MarketingScreen({ navigation }) {
  return (
    <Marketing />
  );
}
function SupportScreen({ navigation }) {
  return (
    <Marketing />
  );
}
const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
   
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen name=" Create Release" component={CreateReleaseScreen} />
        <Drawer.Screen name="Music Library" component={MusicLibraryScreen} />
        <Drawer.Screen name="Services" component={ServicesScreen} />
        <Drawer.Screen name="Stats" component={StatsScreen} />
        <Drawer.Screen name="Marketing" component={MarketingScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
 
  );
}