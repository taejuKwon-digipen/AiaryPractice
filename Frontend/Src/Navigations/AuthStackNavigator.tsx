import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import { create } from 'react-test-renderer';
import AuthHomeScreen from '../Screens/auth/AuthHomeScreen';
import LoginScreen from '../Screens/auth/LoginScreen';
import { AuthNavigations } from '../Constant/Navigation';
import { StackActions } from '@react-navigation/native';
import SignupScreen from '../Screens/auth/SignupScreen';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors';


export type AuthStackPrarmList = {
   [AuthNavigations.AUTH_HOME]: undefined;
   [AuthNavigations.LOGIN]: undefined;
   [AuthNavigations.SIGNUP] : undefined;
}

const Stack = createStackNavigator<AuthStackPrarmList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions = {{
      cardStyle:
        { backgroundColor: 'white', },
      headerStyle:
        {backgroundColor:'rgb(178,163,181)',
          shadowColor : "#FAF8D4"
        },

        headerTitleStyle:{
          fontSize: 25,
        },
        headerTintColor:'grey',
    }}
    >
      <Stack.Screen 
        name = {AuthNavigations.AUTH_HOME}
        component = {AuthHomeScreen}
        options={{
          headerShown: true,
        }}
        />
        <Stack.Screen name ={AuthNavigations.LOGIN} component={LoginScreen} options={{ headerTitle: '로그인'
        }} />
        <Stack.Screen name ={AuthNavigations.SIGNUP} component={SignupScreen}  options={{
          headerTitle: '회원가입'
        }}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;