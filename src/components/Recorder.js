import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default function Home() {
  return (
    <TouchableOpacity
        activeOpacity={.5}
        onPress={()=>{Actions.recording()}}
    >
        <Image 
            style={styles.stretch} 
            source={require('../assets/record.png')}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});
