

import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import AuthHomeScreen from './Src/Screens/AuthHomeScreen';
import AuthStackNavigator from './Src/Navigations/AuthStackNavigator';
import RootNavigator from './Src/Navigations/root/RootNavigator';

function App(){

  return (
    <NavigationContainer>
      <RootNavigator/>
  </NavigationContainer>
  );
}

export default App;
