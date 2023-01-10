import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigationBar from './NavigationBar';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import firestore from '@react-native-firebase/firestore';
import { useTheme } from '@react-navigation/native';

const NewsData = ({navigation, route}) => {

  const[titlenews,setTitlenews]=useState(route.params.title);
  const[categorynews,setCategorynews]=useState(route.params.category);
  const[descnews,setDescnews]=useState(route.params.description);
  const[commentsnews,setCommentsnews]=useState(route.params.comments);

  const[inputEditable,setInputEditable]=useState(false);
  const[cancelColour,setCancelColour]=useState('grey');
  const[editCancelbtn,setEditCancelbtn]=useState('Edit');
  const[deleteSavebtn,setDeleteSavebtn]=useState('Delete');


  // const[values, setValues]=useState({
  //   id:route.params.id,
  //   title:route.params.title,
  //   category:route.params.category,
  //   description:route.params.description,
  //   comments:route.params.comments,
  // })

  const newsCollection = firestore().collection('News');

  // const[inputColor, setInputColor] = useState();

  var editCancelHandler=()=>{
    if(editCancelbtn==='Edit'){
      setEditCancelbtn('Cancel')
      setInputEditable(true)
      setDeleteSavebtn('Update')
    }else{
      setEditCancelbtn('Edit')
      setInputEditable(false)
      setDeleteSavebtn('Delete')
      navigation.push(('NewsData'),{                     
        id: route.params.id,
        title: route.params.title,
        category: route.params.category,
        description:route.params.description,
        comments:route.params.comments
      })
    }
    
    // setInputEditable(true)
    // setCancelColour('#4CBB17')
  }

  var saveDeleteHandler=()=>{
    if(deleteSavebtn==='Delete'){
      var delnews=async()=>{
        await newsCollection
        .doc(route.params.id)
        .delete()


      }
      delnews();
    }else{
      var updateNews=async()=>{
        await newsCollection
        .doc(route.params.id)
        .update({
          title:titlenews,
          category: categorynews,
          desc: descnews,
          comments:commentsnews
        });}
        updateNews();
      // setEditCancelbtn('Edit')
      // setInputEditable(false)
      
    }
    navigation.navigate('Home')
    // setInputEditable(true)
    // setCancelColour('#4CBB17')
  }

  var cancelHandler=()=>{
    setInputEditable(false)
    setCancelColour('grey')
  }

  const { colors } = useTheme();
  
  return (
    <View style={{}}>
      <Text style={styles.title}>News Content</Text>
      <View style={styles.contentView}>
        <Text style={styles.heading}>Category:</Text>
        <TextInput 
        editable={inputEditable} 
        style={styles.TXT}
        value={categorynews}
        onChangeText={setCategorynews}
        >
          {/* {values.category} */}
        </TextInput>
        {/* <Text style={styles.TXT}>Sports</Text> */}

        <Text style={styles.heading}>Title: </Text>
        <TextInput 
        editable={inputEditable} 
        multiline={true} 
        style={styles.TXT}
        value={titlenews}
        onChangeText={setTitlenews}
        >
        {/* {values.title} */}
        </TextInput>

        <Text style={styles.heading}>Description:</Text>
        <TextInput 
        editable={inputEditable}
        multiline={true} 
        style={styles.TXT}
        value={descnews}
        onChangeText={setDescnews}
        >
        {/* {values.description} */}
        </TextInput>

        <Text style={styles.heading}>Comments: </Text>
        <TextInput 
        editable={inputEditable} 
        multiline={true} 
        style={styles.TXT}
        value={commentsnews}
        onChangeText={setCommentsnews}
        >
        {/* {values.comments} */}
        </TextInput>

        <TouchableOpacity
          style={[styles.buttons, {marginBottom: 10,color: 'white'}]}
          onPress={editCancelHandler}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            {editCancelbtn}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, {marginBottom: 80, backgroundColor:cancelColour}]}
          onPress={saveDeleteHandler}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            {deleteSavebtn}
          </Text>
        </TouchableOpacity>
        
      </View>

      <NavigationBar />
    </View>
  );
};

export default NewsData;

const styles = StyleSheet.create({
  contentView: {
    marginTop: 25,
    marginLeft: 25,
  },
  title: {
    fontSize: 23,
    paddingLeft: 25,
    marginTop: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TXT: {
    color: 'grey',
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 1,
    marginBottom: 15,
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
    marginTop: 25,
    // marginBottom: 10,
    marginLeft: 60,
    marginRight: 20,
    width: 200,
  },
});
