import { Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity, View, ScrollView} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';


export default function App() {
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const router = useRouter()

  return (
     <ImageBackground
        source={require('../assets/Entrada.png')}
        resizeMode="cover"
        style={styles.background}
        >
          <SafeAreaView style={styles.container}>
            <Image
              source={require('../assets/HS22FOTOcortada.png')}
              style={styles.image}
            />

            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonContent}>
                <Image
                  source={require('../assets/googlefotinha.png')} 
                  style={styles.buttonImage}
                />
              <TouchableOpacity onPress={() => router.navigate('/conectgoogle')}>
                <Text style={styles.buttonText}>Conectar com google</Text>
              </TouchableOpacity>
              </View>
            </TouchableOpacity>
            
            <View style={styles.divinfo}> 
              <TextInput
                style={styles.input}
                placeholder={isFocusedName ? '' : "Email/Usuário"}
                placeholderTextColor="black"
                onFocus={() => setIsFocusedName(true)}
                onBlur={() => setIsFocusedName(false)}
              />
              <TextInput
                style={[styles.input, styles.inputSpacing]}
                placeholder={isFocusedPassword ? '' : "Senha"}
                placeholderTextColor="black"
                secureTextEntry
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
              />
            </View>
            
            <View style={styles.diventrar}>
              <TouchableOpacity onPress={() => router.navigate('/inicio')} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </TouchableOpacity>

              <View>
            <TouchableOpacity onPress={() => router.push('/esquecesenha')}>
              <Text style={styles.linkText}>Esqueceu a senha</Text>
            </TouchableOpacity>

           <TouchableOpacity onPress={() => router.push('/cadastro')}>
              <Text style={styles.linkText}>Cadastrar-se</Text>
           </TouchableOpacity>

              </View>
            </View>

          </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'flex-start',
    paddingTop: 70,
  },
    buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, 
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 11,
    marginBottom: 20,
  },

  buttonImage: {
    width: 25,
    height: 25,
    // marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    width: 185,
    height: 185,
    resizeMode: 'contain',
    marginBottom: 120,
  },
  input: {
    alignItems: 'stretch',
    // width: '65%',
    // justifyContent: 'stretch',
    height: 40,
    backgroundColor: '#dcdcdc',
    borderRadius: 0,
    // paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 18,
    // elevation: 2,
    fontWeight: 'bold',
    // textAlign: 'flex-start',
    paddingLeft: 10,
    textAlignVertical: 'center',
},
  divinfo: {
    flex: 0.95,
    flexDirection: 'column',
    gap: 20,

  },
  diventrar: {
    flex: 1.3,
    flexDirection: 'column',
    gap: 10,
  },
  inputSpacing: {
    // marginTop: 20, 
  },
  loginButton: {
    backgroundColor: '#2e003e',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    height: 35,
  },
  linkText: {
    color: '#2e003e',
    textDecorationLine: 'underline',
    // justifyContent: 'flex-start',
  },
  divtextos: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection:  'column',
    alignItems: 'center',
  }
});