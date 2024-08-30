import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import { AuthStackPrarmList } from '../Navigations/AuthStackNavigator';
import { AuthNavigations } from '../Constant';
import { StackScreenProps } from '@react-navigation/stack';


type AuthHomeScreenProps = StackScreenProps<AuthStackPrarmList, typeof AuthNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation}:AuthHomeScreenProps) {
  return (
    <SafeAreaView>
        <View>
            <Button 
            title ="로그인 화면으로 이동 "
            onPress={() => navigation.navigate(AuthNavigations.LOGIN)}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default AuthHomeScreen; 