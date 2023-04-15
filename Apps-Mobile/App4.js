import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    if(parseFloat(num1)/parseFloat(num2) < 0.7){
    setResultado('Alcool');
    }
    else{
      setResultado('Gasolina');
    }
  }

  return (
    <View>
    <View style = {{alignItems: 'center'}}>
    <Image
          source={{ uri: 'https://play-lh.googleusercontent.com/uppnNukrvQ7ttY2yK0Jp1jretVddquUYEGjwVl8cNCGNL7J9P4OqSh-AqljkVJJjQVFL'}}
          style={{ width: 200, height: 200}}
        />
        </View>

      <TextInput placeholder="Preço do Alcool" onChangeText={(a) => setNum1(a)} />
      <TextInput placeholder="Preço da Gasolina" onChangeText={(b) => setNum2(b)} />
      <Button title="Verificar" onPress={calcular} />
      <Text>O resultado é: {resultado}</Text>
    </View>
  );
}
