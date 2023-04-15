import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const imc = parseFloat(num1)/parseFloat(num2)**2;
    if (imc < 18.5)
     setResultado('Abaixo do peso');
    else if (imc < 24.9)
      setResultado('Peso Normal');
    else if (imc < 29.9)
      setResultado('Sobrepeso');
    else if (imc < 34.9)
      setResultado('Obesidade Grau I');
    else if (imc < 39.9)
      setResultado('Obesidade Grau II');
    else
      setResultado('Obesidade Grau III');
  }

  return (
    <View>
    <View style = {{alignItems: 'center'}}>
    <Image
          source={{ uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk'}}
          style={{ width: 200, height: 200}}
        />
        </View>

      <TextInput placeholder="Peso" onChangeText={(a) => setNum1(a)} />
      <TextInput placeholder="Altura" onChangeText={(b) => setNum2(b)} />
      <Button title="Verificar" onPress={calcular} />
      <Text>O resultado é: {resultado}</Text>
    </View>
  );
}
