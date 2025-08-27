import { Text, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

export default function Esqueceu() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Tela esqueceu senha
      </Text>

      <View>
        <Text style={styles.texto}>
          Entrar sem senha.
        </Text>
        <View style={styles.viewtop}> 
          <TextInput
              style={styles.inputao}
              placeholder={"Digite seu e-mail aqui."}
              placeholderTextColor="black"/>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewtop: {
    paddingLeft: 15,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 25,
    paddingBottom: 30,
  },
  inputao: {
    backgroundColor: 'lightgray',
    paddingLeft: 10,
    width: 350,
    // height: 25,
  },
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
});
