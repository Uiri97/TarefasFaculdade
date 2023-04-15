import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Switch, Button, Pressable } from 'react-native';

export default function FormularioContaBancaria() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limiteConta, setLimiteConta] = useState('');
  const [brasileiro, setBrasileiro] = useState(false);
  const [dados, setDados] = useState(null);

  const handleConfirmarPress = () => {
    setDados({
      nome,
      idade,
      sexo,
      escolaridade,
      limiteConta,
      brasileiro
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setNome}
        value={nome}
      />

      <Text>Idade:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setIdade}
        value={idade}
      />

      <Text>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={setSexo}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <Text>Escolaridade:</Text>
      <Picker
        selectedValue={escolaridade}
        onValueChange={setEscolaridade}
      >
        <Picker.Item label="Fundamental" value="Fundamental" />
        <Picker.Item label="Médio" value="Médio" />
        <Picker.Item label="Superior" value="Superior" />
      </Picker>

      <Text>Limite na conta:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setLimiteConta}
        value={limiteConta}
        keyboardType="numeric"
        placeholder="Digite o limite na conta"
      />

      <Text>Brasileiro:</Text>
      <Switch
        onValueChange={setBrasileiro}
        value={brasileiro}
      />

      <Pressable
        onPress={handleConfirmarPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : 'blue',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          },
        ]}
      >
        <Text style={{ color: 'white' }}>Confirmar</Text>
      </Pressable>
      
      {dados && (
        <View style={{ marginTop: 20 }}>
          <Text>Nome: {dados.nome}</Text>
          <Text>Idade: {dados.idade}</Text>
          <Text>Sexo:{dados.sexo}</Text>
<Text>Escolaridade: {dados.escolaridade}</Text>
<Text>Limite na conta: R${dados.limiteConta}</Text>
<Text>Brasileiro: {dados.brasileiro ? 'Sim' : 'Não'}</Text>
</View>
)}
</View>
);
}