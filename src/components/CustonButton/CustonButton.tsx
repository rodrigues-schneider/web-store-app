import React from 'react';
import { TouchableOpacity, Text, Falsy } from 'react-native';

import { styles } from './CustonButtonStyles';

type CustonButtonProps = {
    label: string;
    onPress: () => void;
    backgoundColor?: string;
    height?: number;
    width?: number;
    borderRadius?: number;
    textColor?: string;
    disabled?: boolean;
};

export function CustonButton(props: CustonButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.container,
            { backgroundColor: props.backgoundColor || styles.container.backgroundColor },
            { borderRadius: props.borderRadius || styles.container.borderRadius },
            { height: props.height || styles.container.height },
            { width: props.width || styles.container.width }]}
            onPress={props.onPress}
            disabled={props.disabled}>

            <Text
                style={[styles.text, { color: props.textColor }]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}