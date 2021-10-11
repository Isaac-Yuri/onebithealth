import React from 'react';
import { View ,Text, StyleSheet } from 'react-native';

export default function Title(props) {
  return(
    <View>
      <Text style={styles.titulo}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});