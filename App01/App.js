import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function AppMeuPerfil() {
  const img = 'https://cdn.shopify.com/s/files/1/0863/0604/products/Capybara8x10.jpg?v=1531865484';
  const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold'
    }
})
  return (
    <View style = {{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
      <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, borderRadius:100}}
        />
        <Text style={{ fontSize: 25}}>
        Yuri Ferreira
      </Text>
      <Text style={{ fontSize: 20}}>
        20 Anos
      </Text>
      <Text style={{ fontSize: 15, margin: 10, padding: 10}}>
        <Text style={styles.boldText}>FATEC PRAIA GRANDE</Text> - Análise e Desenvolvimento de Sistemas {'\n'}
        <Text style={styles.boldText}>ETEC PRAIA GRANDE</Text> - Informática para internet
      </Text>
      <Text style={{ fontSize: 25}}>
        Experiências
      </Text>
      <Text style={{ fontSize: 15, margin: 10, padding: 10}}>
        <Text style={styles.boldText}>Monitoria de Estrutura de Dados</Text> - 6 Meses{'\n'}
        <Text style={styles.boldText}>Estágio FrontEnd</Text> - 1 Mês
      </Text>
       <Text style={{ fontSize: 25}}>
        Projetos
      </Text>
      <Text style={{ fontSize: 15, margin: 10, padding: 10}}>
       <Text style={styles.boldText}>TCC - FitBox</Text>{'\n'}
       Site desenvolvido para acompanhamento de estoques{'\n'}
      <Text style={styles.boldText}>Prototipação - Site para adoção</Text> {'\n'}
        Protótipação completa de site desenvolvido para a disciplina de Interação Humano Computador {'\n'}   
        <Text style={styles.boldText}>Clone Google</Text>{'\n'}
        Clonagem da tela inicial do google para aprendizado de conceitos
          </Text>
      
    </View>
  );
}
