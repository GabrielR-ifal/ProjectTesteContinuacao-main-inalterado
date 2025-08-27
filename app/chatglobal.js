import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Conversas() {
   const [isFocusedInput, setIsFocusedInput] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.bloco}>
            <Text style={styles.paragraph}>
                Chat ao vivo
            </Text>
        </View>
        <View></View>
        <View style={styles.bloco2}>
            <Text>Tópico atual: Racismo</Text>
        </View>
        <View style={styles.bloco3}>
            <Text style={styles.vivo}>Ao vivo</Text>
            <View style={styles.conjunto}>
                <TextInput 
                    style={styles.input}
                    placeholder={isFocusedInput ? '' : "Digite sua mensagem"}
                    placeholderTextColor="black"
                />
                <Text style={styles.enviar}>Enviar</Text>
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
    flex: 0,
    gap: 5,
  },
  enviar: {
    color: 'white',
  },
  vivo: {
    marginLeft: 15,
    color: 'white',
    backgroundColor: 'red',
    width: 55,
  },
  conjunto: {
    flex: 0,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 50,

  },
  bloco3: {
    backgroundColor: 'purple',
    paddingLeft: 30,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  bloco2: {
    backgroundColor: 'lightgray',
    marginTop: 680,
  },
  bloco: {
    backgroundColor: 'purple',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});