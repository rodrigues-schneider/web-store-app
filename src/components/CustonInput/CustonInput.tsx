import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@react-native-vector-icons/entypo';
import { forest_hunt } from '../../../assets/color-palettes';


import { styles } from './CustonInputStyles';

export function CustonInput(props?: any) {
    
    const [hidePassword, setHidePassword] = useState(props.isPassword || false);

    return (
        <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
            <Text
                style={styles.text}>
                {props.label || ' '}
            </Text>
        <View>

        </View>
            <TextInput
                style={[styles.textInput, {backgroundColor: props.textInputColor}]}
                inputMode={props.inputMode || 'text'}
                secureTextEntry={hidePassword}
                {...(props.isPassword ? {textContentType: "password", autoComplete: "password"} : {})}
                {...props}
                />


                {props.isPassword && (
                    <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Entypo name={hidePassword ? 'eye' : 'eye-with-line'} size={24} color={forest_hunt.verde_escuro}/>
                    </TouchableOpacity>
                )}

        </View>
    );
}