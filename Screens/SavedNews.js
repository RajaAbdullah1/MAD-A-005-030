import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import NavigationBar from './NavigationBar';
import NewsContent from './NewsContent';
import {useState, useEffect} from 'react';
import DummyData from './DummyData';
import firestore from '@react-native-firebase/firestore';
import NewsData from './NewsData';

const Home = () => {
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

  return (
    <View style={styles.homeMain}>
      <Text
        style={{
          fontSize: 23,
          color: 'black',
          paddingLeft: 25,
          paddingTop: 25,
          paddingBottom: 4,
          fontWeight: 'bold',
        }}>
        History
      </Text>

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

    backgroundColor: '#1E5631',
    height: 250,
    paddingTop: 20,
    paddingLeft: 25,
    width: 170,
    borderRadius: 20,
  },
  buttonView: {
    flexDirection: 'row',
    height: 250,
    marginTop: 40,
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
    backgroundColor: '#4CBB17',
    paddingTop: 20,
  },

  // recentSection: {
  //   // height: 220,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 10,
  //   marginBottom: 70,
  // },
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
});
