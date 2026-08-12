import React from 'react';
import { View } from 'react-native';
import {CustonButton}from'../../components';
import {MyStackNavigator as navigator} from '../../navigation'


import { styles } from './OptionsScreenStyles';

export function OptionsScreen() {
  return (
    <View style={styles.container}>
      <CustonButton
      label="Sair da Conta"
      textColor='#fff'
        onPress={() => navigator.resetAndGo('login')}
      />

    </View>
  );
}