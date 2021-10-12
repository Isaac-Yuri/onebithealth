import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title title='Descubra seu imc' />
      <Main />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(216, 216, 216)',
  },
});
