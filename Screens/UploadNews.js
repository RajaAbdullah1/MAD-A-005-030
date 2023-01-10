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

export default function App({navigation}) {
  // const toastMSG = () => {
  //   ToastAndroid.show('Account Registered', ToastAndroid.SHORT);
  // };

  const newsCollection = firestore().collection('News');

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [comments, setComments] = useState('');

  const handleNewsUpload = async ()=>{
    var daty=new Date();
    var todayDate=daty.getMonth()+'-'+daty.getDate()+'-'+daty.getFullYear();
    await newsCollection.add({
      category: category,
      title: title,
      desc: desc,
      comments: comments,
      dateCreated: todayDate
    })
    .then(() => {
      alert ("News Uploaded successfully")
      setCategory("");
      setTitle("")
      setDesc("");
      setComments("");
      navigation.navigate('Home')
      
    })
  }


  return (
    <View style={styles.loginMain}>
      <ScrollView>
        <Text style={styles.title}>Create News</Text>

        {/* <View style={styles.image}>
            <Text style={{color: 'darkgreen',}}>IMAGE</Text>
        </View> */}

        <View style={styles.inputView}>
          <TextInput
            onChangeText={value => setCategory(value)}
            placeholder="Category"
            placeholderTextColor={'darkgreen'}
            value = {category}
            style={[
              styles.inputField,
              {height: 55, borderRadius: 50},
            ]}></TextInput>
          <TextInput
            onChangeText={value => setTitle(value)}
            placeholder="Title"
            placeholderTextColor={'darkgreen'}
            value = {title}
            style={[
              styles.inputField,
              {height: 55, borderRadius: 50},
            ]}></TextInput>
          <TextInput
            onChangeText={value => setDesc(value)}
            placeholder="Description"
            placeholderTextColor={'darkgreen'}
            value = {desc}
            style={[
              styles.inputField,
              {height: 140, borderRadius: 20},
            ]}></TextInput>
          <TextInput
            onChangeText={value => setComments(value)}
            placeholder="Comments"
            placeholderTextColor={'darkgreen'}
            value = {comments}
            style={[
              styles.inputField,
              {height: 90, borderRadius: 20},
            ]}></TextInput>
        </View>

        <View style={styles.buttonView}>
          {/* <TouchableOpacity style={styles.uploadBTN}>
            <Text
              style={{
                color: '#4CBB17',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Upload Image
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            
            style={[styles.buttons, {marginBottom: 70}]}
            onPress={handleNewsUpload}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  loginMain: {
    backgroundColor: 'white',
  },

  title: {
    fontSize: 23,
    paddingLeft: 25,
    marginTop: 25,
    fontWeight: 'bold',
    color: 'black',
  },

  inputView: {
    marginTop: 20,
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

  uploadBTN: {
    backgroundColor: 'transparent',
    paddingTop: 19,
    paddingBottom: 19,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
    marginRight: 20,
    width: 200,
    color: 'black',
    borderWidth: 1,
    borderColor: '#4CBB17',
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
