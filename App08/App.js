import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image,Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg',
              }}
              style={{ width: 200, height: 300 }}
            />
             <Text style={{textAlign: 'center', fontSize: 22, backgroundColor: 'red', marginTop: 10, color: 'white'}}>Compre agora</Text>
          </View>
          <View style={styles.box1}>
            <Image
              source={{ uri: 'https://m.media-amazon.com/images/I/A1bjqEgTQdL.jpg' }}
              style={{ width: 200, height: 300 }}
            />
             <Text style={{textAlign: 'center', fontSize: 22, backgroundColor: 'red', marginTop: 10, color: 'white'}}>Compre agora</Text>
          </View>
          <View style={styles.box1}>
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/I/81u+ljPVifL.jpg',
              }}
              style={{ width: 200, height: 300 }}
            />
            <Text style={{textAlign: 'center', fontSize: 22, backgroundColor: 'red', marginTop: 10, color: 'white'}}>Compre agora</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    height: 300,
    width: 200,
    marginLeft: 100,
    marginTop: 150,
    marginRight:100,
  }
});

export default App;
