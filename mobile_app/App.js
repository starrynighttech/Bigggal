import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  return (
    <ImageBackground 
      source={require('./assets/smoke.mp4')} 
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Earn Money, Watch Videos!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
