import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import { ScreenContainer } from 'react-native-screens';

interface CustomButtonProps {
    label: string;
    variant: 'filled' | 'outlined';
}

function CustomButton({label, variant}: CustomButtonProps) {
  return (
    <Pressable style = {styles[variant]}>
        <Text>(label)</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        justifyContent:'center' ,
    },
    filled:{
        backgroundColor: "#ebdccb" ,
    },
    outlined: {
        bordercolor: "#ebdccb" ,
        borderWidth: 1,
    }
});

export default CustomButton;