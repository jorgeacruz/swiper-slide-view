
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>Lets Startedasaas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
