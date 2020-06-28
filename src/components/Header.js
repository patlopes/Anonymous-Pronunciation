import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <Image 
        style={styles.stretch} 
        source={require('../assets/mask.png')}
    />
  );
}

const styles = StyleSheet.create({
  stretch: {
    height: 60,
    width: 50,
    resizeMode: 'stretch',
  },
});
