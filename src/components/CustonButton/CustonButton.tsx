import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './CustonButtonStyles';

type CustonButtonProps = {
    label: string;
    onPress: () => void;
    backgoundColor?: string; 
    borderRadius?: number;
    textColor?: string;
};

export function CustonButton(props: CustonButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.container,
                {backgroundColor: props.backgoundColor || styles.container.backgroundColor},
                {borderRadius: props.borderRadius || styles.container.borderRadius}]}
            onPress={props.onPress}>
            <Text
                style={[styles.text, {color: props.textColor}]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}