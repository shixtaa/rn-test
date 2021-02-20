import React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/account/login'
import Demo from './pages/demo'
import UserInfo from './pages/account/userInfo'
const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserInfo" headerMode="none">
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;