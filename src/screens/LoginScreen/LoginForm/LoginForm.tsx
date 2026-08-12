import React from 'react';
import { View } from 'react-native';
import {CustonInput, CustonButton} from '../../../components/';

import { styles } from './LoginFormStyles';
import { MyStackNavigator as navigator } from '../../../navigation';

export function LoginForm() {

  
  return (
    <View style={styles.container}>

        <CustonInput
        label={'Email'}
        />

        <CustonInput
        label={'Senha'}
        isPassword={true}
        />

        <CustonButton
        label="ENTRAR"
        textColor="#fff"
        onPress={() => navigator.resetAndGo('app')}
        />

    </View>
  );
}