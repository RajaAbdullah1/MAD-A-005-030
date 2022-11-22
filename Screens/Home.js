import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import NavigationBar from './NavigationBar'
import NewsContent from './NewsContent'

const Home = ({navigation}) => {
  return (
    <View style={styles.homeMain}>
       <View style={styles.buttonView}>

            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('UploadNews')}>
                <Text style={{color: 'white', fontWeight: '500', fontSize: 27}}>Create{'\n'}News +</Text>
            </TouchableOpacity>
            
            <View style={styles.twoButtons}>
                <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('SavedNews')}>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: '500', fontSize: 20, paddingTop: 10}}>Saved{'\n'}News</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.saveButton, {marginTop: 10}]} onPress={() => navigation.navigate('TodayNews')}>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: '500', fontSize: 20, paddingTop: 10}}>Today's{'\n'}News</Text>
                </TouchableOpacity>
            </View>
         </View>


            <Text style={{fontSize: 23, color: 'black', paddingLeft: 25, paddingTop: 20, fontWeight: 'bold'}}>Recent Upload's</Text>


        <ScrollView>           
            <View style={styles.recentSection}>

                <NewsContent />
                <NewsContent />
                <NewsContent />
                <NewsContent />

            </View>

        </ScrollView>

            <NavigationBar />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeMain:{
        backgroundColor: 'white',
        height: '100%',
    },
    createButton:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 20,
    

        backgroundColor: '#1E5631',
        height: 250,
        paddingTop: 20,
        paddingLeft: 25,
        width: 170,
        borderRadius: 20,
    },  
    buttonView:{
        flexDirection: 'row',
        height: 250,
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'none',

        // borderColor: 'black',
        // borderWidth: 1,
    },  
    twoButtons:{
        marginLeft: 10,
    },  
    saveButton:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,

        height: 120,
        width: 135,
        borderRadius: 20,
        backgroundColor: '#4CBB17',
        paddingTop: 20,

    },

    recentSection:{
        // height: 220,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 80,
    },  
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