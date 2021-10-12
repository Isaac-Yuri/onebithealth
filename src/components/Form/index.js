import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ResultImc from './ResultImc';

export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator(){
    let res = weight/(height)**2;
    return setImc(res.toFixed(2));
  };

  function validationImc() {
    if(weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null)
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular Novamente");
      return
    } else {
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  };

  return(
    <View>
      <View>

        <Text style={styles.titulos}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder='Insira sua altura'
          keyboardType='numeric'
          style={styles.inputs}
        />

        <Text style={styles.titulos}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder='Insira seu peso'
          keyboardType='numeric'
          style={styles.inputs}
        />

        <TouchableOpacity
        onPress={() => validationImc()}
        title={textButton} 
        style={styles.botao}
        activeOpacity={0.7}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc
        messageResultImc = {messageImc}
        resultImc = {imc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titulos: {
    fontWeight:'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  inputs: {
    backgroundColor:'rgb(245, 245, 245)',
    fontSize: 15,
    borderRadius: 25,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    marginBottom: 14,
    marginTop: 14,
  },
  botao: {
    backgroundColor: 'rgb(170, 5, 50)',
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  textButtonCalculator:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
});