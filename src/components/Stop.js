import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
          activeOpacity={.5}
          onPress={()=>{Actions.recording()}}
      >
          <Image 
              style={styles.stretch} 
              source={require('../assets/stop.png')}
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 200,
    height: 200,
    backgroundColor: "#FFC6C6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: 'center',
  },
  stretch: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
});
