import React, { useState } from "react";
import { Text, View, StyleSheet, Picker, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState("real");
  const [moedaPara, setMoedaPara] = useState("dolar");
  const [resultado, setResultado] = useState('');

  function converter() {
    const cotacoes = {
      real: { dolar: 0.18, euro: 0.15 },
      dolar: { real: 5.61, euro: 0.84 },
      euro: { real: 6.67, dolar: 1.19 },
    };

    const valorConvertido =
      parseFloat(valor) * cotacoes[moedaDe][moedaPara];

    setResultado(valorConvertido.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Conversor de moedas em Dólar, Real, Euro
      </Text>
      <TextInput style={{fontSize: 15, borderWidth: 1, borderColor: 'black', borderRadius: 5}} placeholder="Valor" onChangeText={(valor) => setValor(valor)}/>
      <Text>De:</Text>
      <Picker
        selectedValue={moedaDe}
        style={{ marginTop: 5}}
        onValueChange={(itemValue, itemIndex) => setMoedaDe(itemValue)}
      >
        <Picker.Item label="Real" value="real" />
        <Picker.Item label="Dólar" value="dolar" />
        <Picker.Item label="Euro" value="euro" />
      </Picker>

      <Text>Para:</Text>
      <Picker
        selectedValue={moedaPara}
        style={{ marginTop: 5}}
        onValueChange={(itemValue, itemIndex) => setMoedaPara(itemValue)}
      >
        <Picker.Item label="Real" value="real" />
        <Picker.Item label="Dólar" value="dolar" />
        <Picker.Item label="Euro" value="euro" />
      </Picker>
      <View style={{marginTop: 10}}>
        <Button title="Converter" onPress={converter}/>
        <Text>Resultado: {resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
