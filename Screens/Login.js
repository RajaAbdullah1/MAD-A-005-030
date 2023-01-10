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
import auth from '@react-native-firebase/auth';

export default function App() {
  const navigation = useNavigation();
  // const toastMSG = () => {
  //   ToastAndroid.show('Logging In...', ToastAndroid.SHORT);
  // };
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleLogin = () => {
    if (email && pass) {
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          // console.log('signed in!');
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use.');

            // console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('Enter correct email.');

            // console.log('That email address is invalid!');
          }
          if (error.code === 'auth/wrong-password') {
            alert('Invalid credentials.');

            setEmail('');
            setPass('');

            // console.log('That email address is invalid!');
          }

          // console.error(error);
        });
    }
  };

  return (
    <View style={styles.loginMain}>
      <ImageBackground
        source={require('../Images/bg-image.jpg')}
        blurRadius={7}
        style={styles.bgImage}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputView}>
          <TextInput
            onChangeText={value => setEmail(value)}
            value={email}
            placeholder="Email"
            placeholderTextColor={'white'}
            style={styles.inputField}></TextInput>
          <TextInput
            onChangeText={value => setPass(value)}
            value={pass}
            placeholder="Password"
            placeholderTextColor={'white'}
            style={styles.inputField}></TextInput>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity onPress={handleLogin} style={styles.buttons}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EnterEmailOTP')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                color: 'green',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                paddingTop: 20,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Text style={{color: 'white', textAlign: 'center', marginTop: 20}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={{
              marginTop: 15,
              backgroundColor: 'rgba(255,255,255,0.4)',
              height: 45,
              width: 100,
              borderRadius: 30,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                color: 'green',
                fontWeight: 'bold',
                padding: 13,
              }}>
              REGISTER
            </Text>
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

  bgImage: {
    height: 750,
    width: 358,
    opacity: 0.96,
  },

  title: {
    fontSize: 42,
    textAlign: 'left',
    paddingLeft: 40,
    marginTop: 145,
    fontWeight: 'bold',
    color: 'white',
  },

  inputView: {
    marginTop: 20,
  },

  inputField: {
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    textAlign: 'left',
    opacity: 1,
    color: 'white',
    borderColor: 'white',
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

    backgroundColor: 'green',
    paddingTop: 19,
    paddingBottom: 19,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 80,
    marginRight: 20,
    width: 200,
  },
});
