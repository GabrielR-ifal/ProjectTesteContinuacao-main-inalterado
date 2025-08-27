import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Conect() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Tela conectar google
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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