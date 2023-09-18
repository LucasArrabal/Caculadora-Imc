import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  
  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc <18.6){
      alert('Voce esta abaixo do peso ideal'+ ' '+ imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Voce esta no peso ideal'+ ' '+ imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Voce esta levemente acima do peso ideal'+ ' '+ imc.toFixed(2));
    }
    
  }

  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>
      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={(peso)=> setPeso(peso)}
      placeholder="Peso(Kg)"
      keyboardType='numeric'
      />
      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={(altura)=> setAltura(altura)}
      placeholder="Altura(cm)"
      keyboardType='numeric'
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,

  },
  titulo:{
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
  },
  input:{
    backgroundColor: 'grey',
    borderRadius:20,
    margin:15,
    padding:10,
    color: '#fff',
    fontSize:20
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    padding:10,
    backgroundColor: 'green',
  },
  btnText:{
    color: '#fff',
    fontSize:25
  }

});


