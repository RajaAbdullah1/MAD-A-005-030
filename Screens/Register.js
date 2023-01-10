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
  //   ToastAndroid.show('Account Registered', ToastAndroid.SHORT);
  // };

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    if (email && pass) {
      auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          // console.log('User account created & signed in!');
          alert('Account created successfully!');
          navigation.navigate('Login');

          setName('');
          setPhone('');
          setEmail('');
          setPass('');
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
          if (error.code === 'auth/weak-password') {
            alert('Use strong password.');

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
        <Text style={styles.title}>Register</Text>

        <View style={styles.inputView}>
          <TextInput
            placeholder="Full Name"
            onChangeText={value => setName(value)}
            value={name}
            placeholderTextColor={'white'}
            style={styles.inputField}></TextInput>
          <TextInput
            placeholder="Phone"
            onChangeText={value => setPhone(value)}
            value={phone}
            placeholderTextColor={'white'}
            style={styles.inputField}></TextInput>
          <TextInput
            placeholder="Email"
            onChangeText={value => setEmail(value)}
            value={email}
            placeholderTextColor={'white'}
            style={styles.inputField}></TextInput>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'white'}
            onChangeText={value => setPass(value)}
            value={pass}
            style={styles.inputField}></TextInput>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttons} onPress={handleSignUp}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              REGISTER
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 20}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
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
              LOGIN
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
    marginTop: 105,
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
