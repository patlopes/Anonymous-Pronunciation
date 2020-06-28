import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Stop from '../components/Stop';
import Header from '../components/Header';

export default function Recording() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Stop />
      <Text style={styles.pronunciamento}>Finalizar Pronunciamento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pronunciamento:{
    color:'#B6B6B6',
    fontWeight:'bold',
    fontSize: 16,
  }
});
