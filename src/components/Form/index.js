import React, { useState } from 'react';
import { View, Text, TextInput, Button } from "react-native";
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

        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder='Insira sua altura'
          keyboardType='numeric'
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder='Insira seu peso'
          keyboardType='numeric'
        />

        <Button 
        onPress={() => validationImc()}
        title={textButton} />
      </View>
      <ResultImc
        messageResultImc = {messageImc}
        resultImc = {imc}
      />
    </View>
  );
};