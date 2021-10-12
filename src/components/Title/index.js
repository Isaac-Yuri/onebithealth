import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';

export default function Title(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 40,
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(170, 5, 50)',
  },
});