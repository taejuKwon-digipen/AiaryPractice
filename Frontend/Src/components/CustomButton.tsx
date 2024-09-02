import React from 'react';
import {StyleSheet, View, Text, Pressable, PressableProps, Dimensions} from 'react-native';
import { ScreenContainer } from 'react-native-screens';

interface CustomButtonProps extends PressableProps{
    label: string;
    variant?:'filled' | 'outlined';
    size?: 'large' | 'medium';
}

function CustomButton({
    label, 
    variant = 'filled', 
    size = 'large',
    ...props /*이렇게 하면 일일이 추가x 한번에 넘겨줄 수 있음 */
}: CustomButtonProps) {
    Dimensions.get('screen').height /*get 에서 스크린/윈도우 두가지 잇음 ios는 차이 없는데 안드는 차이 o*/
  return (
    <Pressable style = {[styles.container, styles[variant], styles[size]]}
    {...props}> /* for onpressed */
        <Text style={[styles.text, styles[`${variant}Text`]]}> (label)</Text>
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