import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';

export default function App(){
  const [cont, setCont] = useState(0)

  function mudar(simb){
    if (simb == '+'){
      setCont(cont+1)
    }
    else{
      if(cont > 0){
        setCont(cont-1)

      }
    }
  }

    return(
      <View>
      <View style={{alignItems: 'center'}}>
      <Text style={{marginTop: 30, fontSize: 48, color: 'orange'}}>Contador</Text>
      <Text style={{marginTop: 30, fontSize: 48, color: 'orange'}}>{cont}</Text>
      </View>

       <View style={{marginTop: 20}}>
        <Button title="+" onPress = {() => mudar('+')}/>
      </View>

      <View style={{marginTop: 20}}>
        <Button title="-" onPress = {() => mudar('-')}/>
      </View>
      </View>

    )
}