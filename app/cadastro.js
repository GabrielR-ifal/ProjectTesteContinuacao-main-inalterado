import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Cadastro() {
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedUsuario, setIsFocusedUsuario] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [IsFocusedDisturbio, setIsFocusedDisturbio] = useState(false);
    const [IsFocusedGenero, setIsFocusedGenero] = useState(false);
    const [IsFocusedEmail, setIsFocusedEmail] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Tela Cadastro
      </Text>
      <View>
        <View style={styles.div}>
          <TextInput 
                  style={styles.textinput}
                  placeholder={isFocusedName ? '' : "Nome completo"}
                  placeholderTextColor="black"
                  onFocus={() => setIsFocusedName(true)}
                  onBlur={() => setIsFocusedName(false)}
                />
          <TextInput
                  style={styles.textinput}
                  placeholder={isFocusedUsuario ? '' : "Usuário"}
                  placeholderTextColor="black"
                  onFocus={() => setIsFocusedUsuario(true)}
                  onBlur={() => setIsFocusedUsuario(false)}
                />
          <TextInput
                  style={styles.textinput}
                  placeholder={isFocusedPassword ? '' : "Senha"}
                  placeholderTextColor="black"
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                />
          <TextInput
                  style={styles.textinput}
                  placeholder={IsFocusedDisturbio ? '' : "Distúrbio"}
                  placeholderTextColor="black"
                  onFocus={() => setIsFocusedDisturbio(true)}
                  onBlur={() => setIsFocusedDisturbio(false)}
                />
          <TextInput
                  style={styles.textinput}
                  placeholder={IsFocusedGenero ? '' : "Gênero"}
                  placeholderTextColor="black"
                  onFocus={() => setIsFocusedGenero(true)}
                  onBlur={() => setIsFocusedGenero(false)}
                />
          <TextInput
                  style={styles.textinput}
                  placeholder={IsFocusedEmail ? '' : "E-mail"}
                  placeholderTextColor="black"
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textinput: {
    backgroundColor: 'lightgray',
    width: 250,
    alignItems: 'center',
    // height: 26,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  div: {
    display: 'flex',
    gap: 30,
    paddingLeft: 70, 
  }
});