import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function Configuracoes() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Menu de configurações
      </Text>

      <View style={styles.bloco}>
        <Text>Configurações de segurança</Text>
      </View>
        
      <View style={styles.bloco}>
        <Text>Configurações de privacidade</Text>
      </View>
            
      <View style={styles.bloco}>
        <Text>Sair</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={{color: 'red'}}>Deletar conta</Text>
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
  bloco: {
    borderBlockColor: 'black',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});