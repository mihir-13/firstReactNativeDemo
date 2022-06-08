
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from './components/Login';
import Home from './components/Home';
import SettingsScreen from './components/Settings';
import ScreenDetails from './components/ScreenDetails';
import Profils from './components/Profils';
import DashboardSettings from './components/DashboardSettings';


// function SplashScreen({ navigation }) {
//   // const navigate = this.props.navigation;
//   return (
//     <Login />
//   );
// }


// // create a component
class SplashScreen extends Component {
  render() {
    return (
      <Login navigation={this.props.navigation} />
    );
  }
}



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={SplashScreen} />
      <HomeStack.Screen name="Dashboard" component={Profils} />
      <HomeStack.Screen name="DashboardSettings" component={DashboardSettings} />
    </HomeStack.Navigator>
  );
}

function SettingsStackNavigation() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="ScreenDetails" component={ScreenDetails} />
    </SettingsStack.Navigator>
  );
}

//SplashScreen
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptionsOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Setings" component={SettingsStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
