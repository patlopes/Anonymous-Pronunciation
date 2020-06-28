import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Recorder from '../components/Recorder'
import Header from '../components/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Recorder />
      <Text style={styles.pronunciamento}>Começar Pronunciamento</Text>
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
