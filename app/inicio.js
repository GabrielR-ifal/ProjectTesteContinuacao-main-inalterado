import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// You can import supported modules from npm


// or any files within the Snack

export default function App() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.partezinha}></View>
        <View style={styles.partesuperior}>
          <View style={styles.partesuperiorinterna}>
            <Image source={require('../assets/LogodoHS.png')} style={styles.logo}/>
            <Image source={require('../assets/botaoposts.png')} style={styles.image}/>
            <TouchableOpacity onPress={() => router.push('/chatglobal')}>             
              <Image source={require('../assets/chataovivo.png')} style={styles.image}/>  
            </TouchableOpacity>
            <Image source={require('../assets/inicio.png')} style={styles.image}/>
            <TouchableOpacity onPress={() => router.push('/configuracoes')}>             
              <Image source={require('../assets/botaoconfiguracoes.png')} style={styles.image}/>    
            </TouchableOpacity>
          </View>
      </View>

      <View style={styles.backgroundnotif}>
        <View style={styles.notif}>
          <Text style={{color:'white'}}>Notificações</Text>
        </View>
        <View style={styles.bloco}>
          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 lhe mencionou em um post!!</Text>
          </View>

          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 curtiu seu post mais recente!!</Text>
          </View>

          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 curtiu seu post mais recente!!</Text>
          </View>

          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 curtiu seu post mais recente!!</Text>
          </View>

          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 curtiu seu post mais recente!!</Text>
          </View>
        </View>
      </View>

        <View style={styles.partedebaixo}>

          <View style={styles.partedebaixointerna}>

            <View style={styles.bloquinho}>
              <TouchableOpacity onPress={() => router.push('/conversas')}>             
                <Image source={require('../assets/conversas.png')}/>
              </TouchableOpacity>
                <Text style={{color:'white'}}>Conversas</Text>
            </View>

            <View style={styles.bloquinho}>
              <TouchableOpacity onPress={() => router.push('/perfil')}>             
                <Image source={require('../assets/fotodeperfilroxa.png')}/>
              </TouchableOpacity>
                <Text style={{color:'white'}}>Perfil</Text>
            </View>

            <View style={styles.bloquinho}>
              <TouchableOpacity onPress={() => router.push('/listaamigos')}>             
                <Image source={require('../assets/listaamigos.png')}/>
              </TouchableOpacity>
                <Text style={{color:'white'}}>Lista de amigos</Text>
            </View>
          </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  partedebaixointerna: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-between'
  },
  bloquinho: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  partedebaixo: {
    backgroundColor: 'purple',
    bottom: -350,
  },
  notif: {
    // paddingTop: 15,
    alignItems:'center',
    marginTop: 15,
    //paddingBottom: 20,
    marginLeft: 5,
    backgroundColor: 'purple',
    height: 20,
    width: 150,
    borderRadius: 50,
  },
  bloco: {
    paddingLeft: 15,
    //flex: 0,
    gap: 15,
  },
  divbesouro: {
    // width: '295px',
    borderRadius: 5,
    backgroundColor: 'lightgray',
   // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 10,
  },
  imagem: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  logo: {
    // height: '88px',
    // width: '88px',
    borderRightWidth: 5,
    borderRightColor: 'white',
  },
  image: {
    // height: '40px',
    // width: '46px',
    borderRightWidth: 3,
    borderRightColor: 'white',
  },
  partesuperiorinterna: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  partesuperior: {
    backgroundColor: 'purple',
    borderRadius: 10,
    // height: '100px',
    // width: 100,
    //marginTop: '-13px',
  },
  partezinha: {
    backgroundColor: 'purple',
    // width: 100,
    // height: '25px',
  },
  container: {
    backgroundColor: '#ffe7ea',
    padding: 8,
    flex: 1,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});

