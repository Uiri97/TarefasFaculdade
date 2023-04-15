import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const result = parseFloat(num1) * parseFloat(num2);
    setResultado(result.toString());
  }

  return (
    <View>
      <TextInput placeholder="Digite o primeiro número..." onChangeText={(a) => setNum1(a)} />
      <TextInput placeholder="Digite o segundo número..." onChangeText={(b) => setNum2(b)} />
      <Button title="Calcular" onPress={calcular} />
      <Text>O resultado é: {resultado}</Text>
    </View>
  );
}
