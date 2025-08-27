import { Text, SafeAreaView, StyleSheet, Image, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Listaamigos() {
    const [isFocusedInput, setIsFocusedInput] = useState(false);    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Tela Lista de amigos
      </Text>
      <TextInput 
        style={styles.input}
        placeholder={isFocusedInput ? '' : "Digite o usuário da pessoa"}
        placeholderTextColor="black"        
      />
      <View style={styles.grupopessoa}>
        <View style={styles.divpessoa}>
            <Image style={styles.imagem} source={require('../assets/adonai.png')}/>
            <Text style={styles.nome}>Adonai</Text>
        </View>

        <View style={styles.divpessoa}>
            <Image style={styles.imagem} source={require('../assets/matheus.png')}/>
            <Text style={styles.nome}>Matheus</Text>
        </View>      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ffe7ea',
    padding: 8,
  },
  input: {
    borderBlockColor: 'black',
    borderWidth: 2,
    paddingBottom: 3,
    backgroundColor: 'white',
  },
  nome: {
    fontSize: 20,
    paddingTop: 15,
  },
  grupopessoa: {
    flex: 0,
    gap: 20,
    paddingTop: 30,
  },    
  imagem: {
    height: 75,
    width: 75,
  },
  divpessoa: {
    flex: 0,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'lightgray',
  },    
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});