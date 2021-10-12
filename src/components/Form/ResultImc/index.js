import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc(props) {
  return(
    <View style={styles.boxResult}>
      <Text style={styles.textResults}>{props.messageResultImc}</Text>
      <Text style={styles.textImc}>{props.resultImc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxResult: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
  },
  textResults : {
    color: '#ff0043',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textImc: {
    fontSize: 50,
    color: '#ff0043',
    fontWeight: 'bold',
  },
});