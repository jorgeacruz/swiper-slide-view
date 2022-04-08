# Swiper Slide View
## The Concept
### The idea is create simple Swiper or Slider adding some action to male your app pretty good. Enjoy it!


## Instalation
#### For more information read documentation, click link bellow.
## [Github React Native Swiper](https://github.com/leecade/react-native-swiper)

## Hands-on 

**Installation**

v1.5.14
**$ npm i react-native-swiper --save**

v1.6.0-rc
**npm i --save react-native-swiper@next**

#### Code it
```
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

//Dimension image on screen
const {width, height} = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} /> /
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
```
### Show Case

![](https://camo.githubusercontent.com/8d364208714e96e6815353c812ee58e36ffa246d31536aebd01360db7602a23d/687474703a2f2f692e696d6775722e636f6d2f7a7273617a41472e6769663d33303078)

### Credits to [Lecade](https://github.com/leecade/react-native-swiper)



