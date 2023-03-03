import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };


    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }
  
  add(){
    this.setState({
      contador: this.state.contador + 1
    });
  }

  sub(){
    if(this.state.contador <= 0){

    }else{
    this.setState({
      contador: this.state.contador - 1
    });
    }
  }


  render(){
    return(
      <View style={{ marginTop: 20 }}>
<Text style={{fontSize: 28, textAlign: 'center'}}>
          Contador de Pessoas
        </Text>

        <Text style={{fontSize: 50, color: 'red', textAlign: 'center'}}>
          {this.state.contador}
        </Text>

        <Button title="Adicionar" onPress={this.add} />

        <Button title="Retirar" onPress={this.sub} />
        
      </View>
    )
  }
}


export default App;