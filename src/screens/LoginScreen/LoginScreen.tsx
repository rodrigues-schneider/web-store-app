import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { forest_hunt } from '../../../assets/color-palettes';
import { LoginForm } from './LoginForm/LoginForm'


import { styles } from './LoginScreenStyles';

export function LoginScreen() {

  return (
  
    <LinearGradient
      style={styles.container}
      colors={[forest_hunt.verde_claro, forest_hunt.bege_fundo]}
      locations={[0.5, 0.5]}
      start={{ x: 0.15, y: 0.1 }}
      end={{ x: 0, y: 0.8}}
    >
      <Text
        style={[styles.text, {marginBottom: 20}]}>
          BEM VINDO DE VOLTA!
      </Text>
            <Text
        style={[styles.text, {fontSize: 16}]}>
          Insira seus dados para entrar na sua conta.
      </Text>

      <LoginForm />

    </LinearGradient>
  );
}