import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import NavigationBar from './NavigationBar';
import NewsContent from './NewsContent';
import {useState, useEffect} from 'react';
import DummyData from './DummyData';
import firestore from '@react-native-firebase/firestore';
import NewsData from './NewsData';
import {useTheme} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [newslist, setNewslist] = useState([]);
  const newsCollection = firestore().collection('News');

  useEffect(() => {
    var getdata = async () => {
      await newsCollection.get().then(data => {
        setNewslist(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        // console.log(data.datecreated)
      });
    };
    getdata();
  }, []);

  const {colors} = useTheme();

  return (
    <View style={styles.homeMain}>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.createButton, {backgroundColor: colors.button1}]}
          onPress={() => navigation.navigate('UploadNews')}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 27}}>
            Create{'\n'}News +
          </Text>
        </TouchableOpacity>

        <View style={styles.twoButtons}>
          <TouchableOpacity
            style={[styles.saveButton, {backgroundColor: colors.button2}]}
            onPress={() => navigation.navigate('SavedNews')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 20,
                paddingTop: 10,
              }}>
              Upload{'\n'}History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.saveButton,
              {marginTop: 10, backgroundColor: colors.button2},
            ]}
            onPress={() => navigation.navigate('TodayNews')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 20,
                paddingTop: 10,
              }}>
              Today's{'\n'}News
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            paddingLeft: 25,
            paddingTop: 20,
            fontWeight: 'bold',
          }}>
          Recent Upload's
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#1E5631',
            width: 30,
            height: 30,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginLeft: 110,
          }}
          onPress={() => navigation.push('Home')}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../Images/refresh.png')}
          />
        </TouchableOpacity>
      </View>

      {/* <Button onPress={} title='touch me'/> */}
      <View style={styles.recentSection}>
        <FlatList
          data={newslist}
          showsVerticalScrollIndicator={true}
          renderItem={({item}) => {
            if (item != undefined) {
              return (
                <TouchableOpacity
                  style={styles.recentUpload}
                  onPress={() =>
                    navigation.navigate('NewsData', {
                      id: item.id,
                      title: item.title,
                      category: item.category,
                      description: item.desc,
                      comments: item.comments,
                    })
                  }>
                  <NewsContent
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    description={item.desc}
                  />
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
      <NavigationBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeMain: {
    backgroundColor: 'white',
    height: '100%',
  },
  createButton: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,

    // backgroundColor: '#1E5631',
    // backgroundColor: colors.Button,
    height: 250,
    paddingTop: 20,
    paddingLeft: 25,
    width: 170,
    borderRadius: 20,
  },
  buttonView: {
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
  twoButtons: {
    marginLeft: 10,
  },
  saveButton: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,

    height: 120,
    width: 135,
    borderRadius: 20,
    // backgroundColor: '#4CBB17',
    paddingTop: 20,
  },

  recentSection: {
    // height: 220,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 80,
    // backgroundColor:'blue'
  },
  recentUpload: {
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
  editButton: {
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
  recentUpload: {
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
    marginHorizontal: 20,
  },
});
