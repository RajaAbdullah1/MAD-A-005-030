import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const NewsContent = () => {
    const navigation = useNavigation();
  return (
            <TouchableOpacity style={styles.recentUpload}  onPress={() => navigation.navigate('NewsData')}>
                    <Text style={{color: '#555555', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 13, }}>Pakistan are in the semis now</Text>
                    <Text style={{color: 'grey', fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>Pakistan, although an underdog in this whole tournament, has beaten the whims of bad luck, and has advanced to the semi-finals, beating all odds and expectations of.... </Text>
                    <View style={{flexDirection: 'row', paddingTop: 10,}}>
                        <View>
                            <Text style={{color: 'grey', opacity: 0.9,  fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 0, }}>Category: Sports </Text>
                            <Text style={{color: 'grey', opacity: 0.6,  fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 0, }}>Posted on: 11/6/2022 </Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('UploadNews')}>
                            <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12, fontWeight: 'bold'}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
            </TouchableOpacity>
  )
  
}

export default NewsContent

const styles = StyleSheet.create({
    recentUpload:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 3,

        height: 165,
        backgroundColor: '#F5F5F5',
        width: 310,
        borderRadius: 20,
        marginTop: 10,

    },  
    editButton:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,

        height: 35,
        width: 70,
        borderRadius: 50,
        marginLeft: 50,
        
        backgroundColor: '#1E5631',
    },
})