import React, { useState } from 'react';
import {ImageBackground } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import { BlurView } from 'react-native';
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const [senha, setSenha] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.loginBox}>
        <Text style={styles.heading}>Log in</Text>
        <View style={styles.inputBox}>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira sua senha"
            placeholderTextColor="#FFF"
            secureTextEntry={!passwordVisible}
            value={senha}
            onChangeText={setSenha}
            background="white"
          />
          <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
            <Text style={styles.toggleText}>{passwordVisible ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.esqueciSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  loginBox: {
    backgroundColor: 'rgba(105, 105, 105, 0.87)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    alignItens: 'right',
  },
  inputBox: {
    marginBottom: 15,
    width: '100%',

  },
  label: {
    textAlign: 'left',
    marginBottom: 5,
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 16,
    color: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  toggleButton: {
    padding: 5,
  },
  toggleText: {
    fontSize: 12,
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'rgba(0, 250, 160, 0.87)',
    borderRadius: 10,
    padding: 8,
    width: 270,
    height: 40,
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonText: {
    color: 'white',
  },
  esqueciSenha: {
    textAlign: 'left',
    alignContent: 'left',
    color: 'yellow',
    marginTop: 10,
  },
});

export default Login;