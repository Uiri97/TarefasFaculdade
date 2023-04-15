import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');

  function calcular() {
    const random = Math.floor(Math.random() * 10)
    setResultado(random);
  }

  return (
    <View>
    <View style = {{alignItems: 'center'}}>
    <Text style={{fontSize: 20}}>Jogo do número aleatório</Text>
    <Image
          source={{ uri: 'https://images.squarespace-cdn.com/content/v1/55ee0cdbe4b067774286158c/1461325359808-NJ2NZKLI4P30JQSNJ4TE/image-asset.png'}}
          style={{ width: 200, height: 200}}
        />
        

      <Text style={{color: 'red'}}>Pense em um número de 0 a 10</Text>
      <Text style={{fontSize: 32}}>{resultado}</Text>
      <Button title="Descobrir" onPress={calcular} />
      </View>
    </View>
  );
}
