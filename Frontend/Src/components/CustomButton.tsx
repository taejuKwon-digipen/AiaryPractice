import React from 'react';
import {StyleSheet, View, Text, Pressable, PressableProps, Dimensions} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { colors } from '../Constant';

interface CustomButtonProps extends PressableProps{
    label: string;
    variant?:'filled' | 'outlined';
    size?: 'large' | 'medium';
    inValid ?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
    label, 
    variant = 'filled', 
    size = 'large', 
    inValid = false,
    ...props /*이렇게 하면 일일이 추가x 한번에 넘겨줄 수 있음 */
}: CustomButtonProps) {
    Dimensions.get('screen').height /*get 에서 스크린/윈도우 두가지 잇음 ios는 차이 없는데 안드는 차이 o*/
  return (
    <Pressable 
    style = {({pressed}) => [
        styles.container,
        styles[variant],
        styles[size],
        pressed ? styles[`${variant}Pressed`]: styles[variant],
        inValid && styles.inValid, 
    ]}
    disabled = {inValid}
    style = {[styles.container, styles[variant], styles[size], inValid && styles.inValid]} /*invalid 가 true 일때만 스타일 적용*/
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
    inValid:{
        opacity: 0.5, /*버튼 비활성화*/
    },
    filled:{
        backgroundColor: colors.Dun,
    },
    outlined: {
        bordercolor: colors.Almond ,
        borderWidth: 1,
    },
    filledPressed: {

    },
    large:
    {
        width: '50%',
        paddingVertical: deviceHeight >700 ? 15 : 10, /*700 보다 크면 15, 아니면 12*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    medium:
    {
        width : '50%',
        paddingVertical: deviceHeight > 700 ? 12 : 8,
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