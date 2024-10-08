import React from 'react';
import {Button, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import { AuthStackPrarmList } from '../../Navigations/AuthStackNavigator';
import { AuthNavigations } from '../../Constant';
import { StackScreenProps } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorSpace } from 'react-native-reanimated';
import CustomButton from '../../components/CustomButton';


type AuthHomeScreenProps = StackScreenProps<AuthStackPrarmList, typeof AuthNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation}:AuthHomeScreenProps) {
  return (
    <SafeAreaView>
        <View>
            <CustomButton
              label = "로그인 화면으로 이동"
              variant= 'filled'
              size = "large"
              onPress ={() => navigation.navigate(AuthNavigations.LOGIN)}
            />
             <CustomButton
              label = "회원가입"
              variant= "outlined"
              onPress ={() => navigation.navigate(AuthNavigations.SIGNUP)}
            /> 
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default AuthHomeScreen; 