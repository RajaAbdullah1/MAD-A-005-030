/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React} from 'react';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Home from './Screens/Home';
import UploadNews from './Screens/UploadNews';
import Profile from './Screens/Profile';
import TodayNews from './Screens/TodayNews';
import SavedNews from './Screens/SavedNews';
import Stats from './Screens/Stats';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavigationBar from './Screens/NavigationBar';
import NewsData from './Screens/NewsData';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const Stack = createNativeStackNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Stats" component={Stats} options={{headerShown: false}}/>
        <Stack.Screen name="SavedNews" component={SavedNews} options={{headerShown: false}}/>
        <Stack.Screen name="TodayNews" component={TodayNews} options={{headerShown: false}}/>
        <Stack.Screen name="UploadNews" component={UploadNews} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>        
        <Stack.Screen name="NewsData" component={NewsData} options={{headerShown: false}}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

