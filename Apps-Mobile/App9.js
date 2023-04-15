import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default function App() {
  const vagasTI = [
    {
      id: 1,
      titulo: 'Desenvolvedor Full Stack',
      descricao: 'Desenvolver e manter aplicações web e mobile',
      salario: 'R$ 8.000,00',
      contato: 'contato@empresa.com.br',
    },
    {
      id: 2,
      titulo: 'Desenvolvedor Front-end',
      descricao: 'Desenvolver interfaces web responsivas e performáticas',
      salario: 'R$ 6.000,00',
      contato: 'contato@empresa.com.br',
    },
    {
      id: 3,
      titulo: 'Desenvolvedor Back-end',
      descricao: 'Desenvolver APIs e sistemas escaláveis e seguros',
      salario: 'R$ 7.000,00',
      contato: 'contato@empresa.com.br',
    },
    {
      id: 4,
      titulo: 'Especialista em Segurança da Informação',
      descricao: 'O Especialista em Segurança da Informação será responsável por garantir a segurança dos sistemas de informação e dados da empresa.',
      salario: 'R$ 8.000,00 - R$ 12.000,00',
      contato: 'contato@empresa.com.br',
    },
     {
      id: 5,
      titulo: 'Analista de Suporte Técnico',
      descricao: 'O Analista de Suporte Técnico será responsável por fornecer suporte técnico para os usuários da empresa.',
      salario: 'R$ 3.000,00 - R$ 5.000,00',
      contato: 'contato@empresa.com.br',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {vagasTI.map((vaga) => (
          <View style={styles.box} key={vaga.id}>
            <Text style={styles.titulo}>{vaga.titulo}</Text>
            <Text style={styles.descricao}>{vaga.descricao}</Text>
            <Text style={styles.salario}>Salário: {vaga.salario}</Text>
            <Text style={styles.contato}>Contato: {vaga.contato}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    height: 210,
    width: 300,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descricao: {
    fontSize: 16,
    marginTop: 5,
  },
  salario: {
    fontSize: 16,
    marginTop: 5,
  },
  contato: {
    fontSize: 16,
    marginTop: 5,
  },
});
