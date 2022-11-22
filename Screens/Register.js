import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, ImageBackground, ToastAndroid } from 'react-native';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const toastMSG = () => {
    ToastAndroid.show("Account Registered", ToastAndroid.SHORT)
  }

  return (
    <View style={styles.loginMain}>

    <ImageBackground source={require('../Images/bg-image.jpg')} blurRadius = {7} style={styles.bgImage}>

        <Text style={styles.title}>Register</Text>

        <View style={styles.inputView}>
        <TextInput placeholder="Full Name" placeholderTextColor={'white'} style={styles.inputField}></TextInput>
        <TextInput placeholder="Phone" placeholderTextColor={'white'} style={styles.inputField}></TextInput>
        <TextInput placeholder="Email" placeholderTextColor={'white'} style={styles.inputField}></TextInput>
        <TextInput placeholder="Password" placeholderTextColor={'white'} style={styles.inputField}></TextInput>
        </View>
        

        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttons} onPress={toastMSG}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 30}}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginTop: 15, backgroundColor: 'rgba(255,255,255,0.4)',height: 45, width: 100, borderRadius: 30  , alignSelf: 'center'}}>
            <Text style={{color: 'white', textAlign: 'center', color: 'green', fontWeight: 'bold', padding: 13}}>LOGIN</Text>
        </TouchableOpacity>
        </View>

    </ImageBackground>

    </View>
  );
}


const styles = StyleSheet.create({

  loginMain: {
    backgroundColor: 'darkgreen',
    height: 750,  
    opacity: 0.94,
  },

  bgImage:{
    height: 750,
    width: 358,
    opacity: 0.96,
  },
   
  title: {
    fontSize: 42,
    textAlign: 'left',
    paddingLeft: 40,
    marginTop: 105,
    fontWeight: 'bold',
    color: 'white',
  },

  inputView:{
    marginTop:20,
  },    

  inputField: {
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    marginTop:10,
    textAlign: 'left',
    opacity: 1,
    color: 'white',
    borderColor: 'white'
  },

  buttonView:{
    marginTop: 20,
  },
  buttons: {
    
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,

    backgroundColor: 'green',
    paddingTop: 19,
    paddingBottom: 19,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 80,
    marginRight: 20,
    width: 200,
  }

});