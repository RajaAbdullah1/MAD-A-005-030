import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    ToastAndroid,
    ScrollView,
  } from 'react-native';
  import {useState} from 'react';
  import NavigationBar from './NavigationBar';
  import firestore from '@react-native-firebase/firestore';
  import {useNavigation} from '@react-navigation/native';
  
  export default function App() {
  
    const navigation = useNavigation();
    
    return (
      <View style={styles.loginMain}>
        <ScrollView>
          <Text style={styles.title}>Enter OTP</Text>
  
          <View style={styles.inputView}>
            <TextInput
              placeholder="Enter OTP"
              placeholderTextColor={'darkgreen'}
              style={[
                styles.inputField,
                {height: 55, borderRadius: 50},
              ]}></TextInput>
           
          </View>
  
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[styles.buttons, {marginBottom: 70}]}
              onPress={() => navigation.navigate('EnterNewPass')}
              >
              <Text
                style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
  
    
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    loginMain: {
      backgroundColor: 'white',
      height: '100%',
    },
  
    title: {
      fontSize: 22,
      paddingLeft: 25,
      marginTop: 25,
      fontWeight: 'bold',
      color: 'black',
    },
  
    inputView: {
      marginTop: 50,
    },
  
    inputField: {
      borderWidth: 0,
      padding: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 50,
      marginTop: 10,
      textAlign: 'center',
      borderColor: 'lightgreen',
      backgroundColor: '#E4FAE4',
      opacity: 0.7,
      color: 'black',
    },
  
    buttonView: {
      marginTop: 20,
    },
  
  
    buttons: {
      shadowColor: 'black',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
  
      backgroundColor: '#4CBB17',
      paddingTop: 19,
      paddingBottom: 19,
      borderRadius: 100,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 80,
      marginRight: 20,
      width: 200,
    },
  
    image: {
      height: 200,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 25,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#4CBB17',
      borderWidth: 0.5,
    },
  });
  