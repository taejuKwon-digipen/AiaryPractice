import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import { create } from 'react-test-renderer';
import AuthHomeScreen from '../Screens/AuthHomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import { AuthNavigations } from '../Constant';


export type AuthStackPrarmList = {
   [AuthNavigations.AUTH_HOME]: undefined;
   [AuthNavigations.LOGIN]: undefined;
}

const Stack = createStackNavigator<AuthStackPrarmList>();

function AuthStackNavigator() {

  return (
    <Stack.Navigator>
        <Stack.Screen name = {AuthNavigations.AUTH_HOME} component={AuthHomeScreen}/>
        <Stack.Screen name =
        
        
        
        {AuthNavigations.LOGIN} component={LoginScreen}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;