import React from 'react';
import { View, StyleSheet } from "react-native";
import Form from '../Form';

function Main() {
  return(
    <View style={styles.container}>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 30,
    paddingTop: 40,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

export default Main;