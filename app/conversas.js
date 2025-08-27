import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';

export default function Conversas() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Tela Conversas
      </Text>

      <View style={styles.blocozao}>
        <View style={styles.bloco}>
            <Image source={require('../assets/matheus.png')}/>
            <Text style={{color: 'white'}}>Matheus</Text>
        </View>

        <View style={styles.bloco}>
            <Image source={require('../assets/adonai.png')}/>
            <Text style={{color: 'white'}}>Adonai</Text>
        </View>
      </View>

        <View style={styles.divpessoa}>
             <Image style={styles.imagem} source={require('../assets/adonai.png')}/>
            <View>
                <Text style={styles.nome}>Adonai</Text>
                <Text style={styles.mensagem}>Adonai: zoeira ta dahora</Text>
            </View>
        </View>

        <View style={styles.divpessoa}>
            <Image style={styles.imagem} source={require('../assets/matheus.png')}/>
            <View>
                <Text style={styles.nome}>Matheus</Text>
                <Text style={styles.mensagem}>Matheus: rondônia me deixa em pax</Text>
            </View>
        </View>
      
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ffe7ea',
    padding: 8,
  },
  imagem: {
    height: 75,
    width: 75,
  },
  divpessoa: {
    flex: 0,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 30,
    borderRadius: 50,
    gap: 30,
    paddingBottom: 30,
    backgroundColor: 'lightgray',
  },    
  blocozao: {
    borderRadius: 25,
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'purple',
  },
  bloco: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});