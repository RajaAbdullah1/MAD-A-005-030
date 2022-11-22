import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import NavigationBar from './NavigationBar'
import Pie from 'react-native-pie'

const Home = () => {
  return (
    <View style={styles.homeMain}>
 
            <Text style={{fontSize: 23, color: 'black', paddingLeft: 25, paddingTop: 30, paddingBottom: 10, fontWeight: 'bold'}}>Statistics</Text>

                
                <View style={styles.pieView}>

                        <Pie
                    radius={102}
                    innerRadius={40}
                    sections={[
                        {
                        percentage: 10,
                        color: '#7CFC00',
                        },
                        {
                        percentage: 30,
                        color: '#138808',
                        },
                        {
                            percentage: 5,
                            color: "#8FD400",
                        },
                        {
                        percentage: 35,
                        color: '#90EE90',
                        },
                        {
                        percentage: 20,
                        color: '#004225',
                        },
                    ]}
                    dividerSize={0.1}
                    backgroundColor={'black'}
                    strokeCap={'butt'}
                    />
                </View>


                <View style={styles.codes}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
                        <View style={[styles.square,{backgroundColor: '#138808',}]}></View>
                        <Text style={{fontSize: 18, color: 'grey', marginLeft: 20}}>Sports</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
                        <View style={[styles.square,{backgroundColor: '#7CFC00',}]}></View>
                        <Text style={{fontSize: 18, color: 'grey', marginLeft: 20}}>Political</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
                        <View style={[styles.square,{backgroundColor: '#004225',}]}></View>
                        <Text style={{fontSize: 18, color: 'grey', marginLeft: 20}}>Fashion</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
                        <View style={[styles.square,{backgroundColor: '#90EE90',}]}></View>
                        <Text style={{fontSize: 18, color: 'grey', marginLeft: 20}}>Weather</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
                        <View style={[styles.square,{backgroundColor: '#8FD400',}]}></View>
                        <Text style={{fontSize: 18, color: 'grey', marginLeft: 20}}>General</Text>
                    </View>
                </View>
            
            
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
        marginTop: 25,
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

    pieView:{
        width: '100%',
        height: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },  
    codes:{
        marginLeft: 25,
        marginTop: 20,
    },
    square:{
        width: 14,
        height: 14,
        borderRadius: 50,
    }
})