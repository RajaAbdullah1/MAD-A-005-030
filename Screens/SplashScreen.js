import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

    useEffect (() => {
        setTimeout(function(){
            navigation.navigate('Register')
        }, 3000)
    });

  return (
    <View style={styles.loginMain}>
      <ImageBackground
        source={require('../Images/splash.png')}
        style={styles.bgImage}></ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  loginMain: {
    height: 750,
  },

  bgImage: {
    height: 350,
    width: 358,
    marginTop: 200,
    // opacity: 0.96,
  },
});
