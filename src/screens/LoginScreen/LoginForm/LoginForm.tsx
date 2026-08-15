import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CustonInput, CustonButton } from '../../../components/';
import { forest_hunt } from '../../../../assets/';

import { styles } from './LoginFormStyles';
import { MyStackNavigator as navigator } from '../../../navigation';
import LoginService from '../../../services/LoginService';

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const handleLogin = async () => {

    setErrorMessage('');

    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    try {
      const userData = await LoginService.TryToLogin(username, password);
      navigator.resetAndGo('app')
    } catch (error) {
      setErrorMessage("Usuário ou senha incorretos.");
      passwordRef.current?.clear(); 
      setPassword('');
    } finally {
      setIsLoading(false);
  }
};

  return (
    <View style={styles.container}>
      {errorMessage ? (<Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>) : null}

      <CustonInput
        label={'Nome de Usuário'}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        editable={!isLoading}
      />

      <CustonInput
        label={'Senha'}
        isPassword={true}
        inputRef={passwordRef}
        onChangeText={setPassword}
        autoCapitalize="none"
        editable={!isLoading}
      />

      <CustonButton
        label={isLoading ? "ENTRANDO..." : "ENTRAR"}
        textColor="#fff"
        backgroundColor={isLoading ? forest_hunt.verde_escuro : forest_hunt.verde_claro}
        onPress={() => handleLogin()}
        disabled={isLoading}
      />

    </View>
  );
}
