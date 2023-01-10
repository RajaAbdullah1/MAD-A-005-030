import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ToastAndroid,
  Image,
  Switch,
} from 'react-native';
import {useState} from 'react';
import NavigationBar from './NavigationBar';
import { useTheme } from '@react-navigation/native';

export default function App({route}) {
  //   const toastMSG = () => {
  //     ToastAndroid.show("Account Registered", ToastAndroid.SHORT)
  //   }

  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = useState(0);
  const setTheme = route.params.setTheme;
  const {colors} = useTheme();

  function toggleTheme() {
    setCount(count + 1);
    setIsToggled(!isToggled);
    if (count % 2 == 0) {
      setTheme(MyTheme2);
    } else {
      setTheme(MyTheme1);
    }
  }

  return (
    <View style={styles.loginMain}>
      <Text style={styles.title}>My Themes</Text>

      <Switch onValueChange={toggleTheme} value={isToggled} />

      {/* <View style={styles.profileHead}>

            <Image source={require('../Images/bg-image.jpg')} style={styles.Myimage}></Image>
            <Text style={{color: 'grey', fontSize: 16, fontWeight: '600', marginLeft: 15,}}>Muhammad Musa</Text>

        </View>

        <View style={[styles.profileData, {marginTop: 30, marginLeft: 65,}]}>
            <Text style={{color: 'grey',}}>Name:</Text>
            <Text style={{color: 'grey', marginLeft: 50}}>Muhammad Musa</Text>
        </View>
        <View style={[styles.profileData, {marginTop: 20, marginLeft: 65,}]}>
            <Text style={{color: 'grey',}}>Phone:</Text>
            <Text style={{color: 'grey', marginLeft: 50}}>+92 123 456 78</Text>
        </View>
        <View style={[styles.profileData, {marginTop: 20, marginLeft: 65,}]}>
            <Text style={{color: 'grey',}}>Email:</Text>
            <Text style={{color: 'grey', marginLeft: 50}}>cadet.musa@gmail.com</Text>
        </View>
        <View style={[styles.profileData, {marginTop: 20, marginLeft: 65,}]}>
            <Text style={{color: 'grey',}}>Password:</Text>
            <Text style={{color: 'grey', marginLeft: 50}}>***********</Text>
        </View>



        <View style={styles.inputView}>

        </View>
        

        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttons}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Edit</Text>
        </TouchableOpacity>
       
        </View> */}

      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  loginMain: {
    backgroundColor: 'white',
    height: 755,
  },

  title: {
    fontSize: 23,
    paddingLeft: 25,
    marginTop: 25,
    fontWeight: 'bold',
    color: 'black',
  },

  Myimage: {
    height: 47,
    width: 47,
    borderRadius: 50,
    marginLeft: 20,
  },

  buttonView: {
    marginTop: 20,
  },

  profileHead: {
    marginTop: 30,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileData: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
});
