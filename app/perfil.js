import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Tela perfil
      </Text>
      <View style={styles.imagemdiv}>
        <Image source={require('../assets/sapo.jpg')} style={styles.imagem}/>
      </View>
      <View style={styles.pai}>
        <View style={styles.atributos}>
          <Text style={styles.text}>Usuário:</Text> 
          <Text style={styles.text}>E-mail:</Text> 
          <Text style={styles.text}>Gênero:</Text> 
          <Text style={styles.text}>Distúrbio:</Text>
          <Text style={styles.text}>Nome:</Text>
          <Text style={styles.lingua}>LínguaNativ:</Text>
        </View>
        <View style={styles.info}>
          <Text>saposaposa</Text>
          <Text>sapo@mail</Text>
          <Text>Masculino</Text>
          <Text>Maluco</Text>
          <Text>Sapo de Silva</Text>
          <Text>Português</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  lingua: {
    // paddingTop: 26,
    fontWeight: 'bold',
  },
  atributos: {
    flex: 1,
    gap: 15,
  },
  info: {
    flex: 1,
    gap: 15,
  },
  imagemdiv: {
    paddingBottom: 40,
  },
  pai: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  imagem:{
    borderRadius: 50,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#ffe7ea',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
