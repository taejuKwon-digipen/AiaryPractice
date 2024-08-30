import React from 'react';
import {Button, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import { AuthStackPrarmList } from '../../Navigations/AuthStackNavigator';
import { AuthNavigations } from '../../Constant';
import { StackScreenProps } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorSpace } from 'react-native-reanimated';


type AuthHomeScreenProps = StackScreenProps<AuthStackPrarmList, typeof AuthNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation}:AuthHomeScreenProps) {
  return (
    <SafeAreaView>
        <View>
            <Button 
            title ="로그인 화면으로 이동 "
            color = "#ebdccb" 
            onPress={() => navigation.navigate(AuthNavigations.LOGIN)
            }
            
            />
            <Button 
            title =" 회원가입으로 이동 "
            color = "#ebdccb" 
            onPress={() => navigation.navigate(AuthNavigations.SIGNUP)}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default AuthHomeScreen; 