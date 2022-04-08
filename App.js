
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get("window");


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
        <Swiper autoplay={true} showsVerticalScrollIndicator={false}>
          <Image source={require('./src/images/player1.jpeg')} style={styles.ImageBG} />
          <Image source={require('./src/images/player2.jpeg')} style={styles.ImageBG} />
          <Image source={require('./src/images/player3.jpeg')} style={styles.ImageBG} />
          <Image source={require('./src/images/player4.jpeg')} style={styles.ImageBG} />
          <Image source={require('./src/images/player5.jpeg')} style={styles.ImageBG} />
          <Image source={require('./src/images/player6.jpeg')} style={styles.ImageBG} />
        </Swiper>
        <View>
          
        </View>
      
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
  ImageBG: {
    width:width,
    height:height
  }
});
