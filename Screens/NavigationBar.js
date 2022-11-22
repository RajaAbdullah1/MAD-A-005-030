import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.navigationBar}>
        <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
            <Image style={{width: 20, height: 20}} source={require('../Images/user.png')} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('TodayNews')}>
            <Image style={{width: 20, height: 20}} source={require('../Images/Todaysnews.png')}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
            <Image style={{width: 20, height: 20}} source={require('../Images/Home.png')}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('SavedNews')}>
            <Image style={{width: 20, height: 20}} source={require('../Images/Savenews.png')}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Stats')}>
            <Image style={{width: 20, height: 20}} source={require('../Images/stats.png')}/>
        </TouchableOpacity>
    </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({
    navigationBar: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 9,
        shadowRadius: 13,
        elevation: 15,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        position: 'absolute',
        top: 670,
    }
})