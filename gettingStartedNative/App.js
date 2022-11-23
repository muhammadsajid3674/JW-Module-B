import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return<View style={styles.container}>
    <Text style={styles.HelloWorld}>Hello World</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a9d8f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "100%"
  },
  HelloWorld: {
    fontFamily: 'monospace',
    backgroundColor: '#fff',
    color: '#2a9d8f',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2a9d8f',
    
  },
  red: {
    color: 'red',
  },
});