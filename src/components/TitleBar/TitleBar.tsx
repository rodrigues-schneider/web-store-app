import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import StoreIcon from '../../assets/store-icon.png'

import { styles } from './TitleBarStyles';


export function TitleBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.touchable}>
                <Image source={StoreIcon}
                    style={styles.image} />

            </TouchableOpacity>


            <Text style={styles.text}>Store Manager Simulator</Text>

        </View>
    );
}