import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavigationBar from './NavigationBar'


const NewsData = () => {
    const navigation = useNavigation();
  return (
    <View style={{}}>

    <Text style={styles.title}>News Content</Text>
    <View style={styles.contentView}>

      <Text style={styles.heading}>Category:</Text>
      <Text style={styles.TXT}>Sports</Text>
      
      <Text style={styles.heading}>Title: </Text>
      <Text style={styles.TXT}>Pakistan are in the semis now</Text>
      
      <Text style={styles.heading}>Description:</Text>
      <Text style={styles.TXT}>Pakistan, although an underdog in this whole tournament, has beaten the whims of bad luck, and has advanced to the semi-finals, beating all odds and expectations of.... </Text>
      
      <Text style={styles.heading}>Comments: </Text>
      <Text style={styles.TXT}>Pakistan are in the semis now</Text>

      <TouchableOpacity style={[styles.buttons, {marginBottom: 70,}]} onPress={() => navigation.navigate('UploadNews')}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Edit</Text>
      </TouchableOpacity>
    </View>

    <NavigationBar />

    </View>

    
  )
}

export default NewsData

const styles = StyleSheet.create({
    contentView:{
        marginTop:25,
        marginLeft: 25,

        },  
        title: {
            fontSize: 23,
            paddingLeft: 25,
            marginTop: 25,
            fontWeight: 'bold',
            color: 'black',
          }, 
    heading:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },  
    TXT:{
        color: 'grey',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 12,
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
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 60,
        marginRight: 20,
        width: 200,
      },

})