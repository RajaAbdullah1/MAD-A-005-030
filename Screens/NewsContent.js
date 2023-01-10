import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';

const NewsContent = ({title, category, description, comments}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    // <TouchableOpacity style={styles.recentUpload}  onPress={() => navigation.navigate('NewsData')}>
    <View>
      <Text
        numberOfLines={2}
        style={{
          color: colors.newstitle,
          fontSize: 17,
          fontWeight: 'bold',
          paddingLeft: 20,
          paddingTop: 13,
        }}>
        {title}
      </Text>
      <Text
        numberOfLines={3}
        style={{
          color: colors.newsdesc,
          fontSize: 13,
          fontWeight: '500',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 5,
        }}>
        {description}
      </Text>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <View>
          <Text
            style={{
              color: colors.newsdesc,
              opacity: 0.9,
              fontSize: 13,
              fontWeight: '500',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 0,
            }}>
            Category: {category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewsContent;

const styles = StyleSheet.create({
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
