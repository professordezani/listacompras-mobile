import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{contador}</Text>
      <Button title="Incrementar" onPress={incrementar}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold'
  }
});
