import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import { ScreenContainer } from 'react-native-screens';

interface CustomButtonProps {
    label: string;
    variant?:'filled' | 'outlined';
    size?: 'large' | 'medium';
}

function CustomButton({label, variant = 'filled', size = 'large'}: CustomButtonProps) {
  return (
    <Pressable style = {[styles.container, styles[variant], styles[size]]}>
        <Text style={[styles.text, styles[`${variant}Text`]}> (label)</Text>
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
    },
    large:
    {
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    medium:
    {
        width : '50%',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
         fontSize: 16,
         fontWeight: '700',
    },
    filledText:
    {
        color: 'white',
    },
    outlinedText:
    {
        color: 'grey',
    } 
});

export default CustomButton;