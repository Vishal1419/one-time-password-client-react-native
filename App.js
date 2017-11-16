import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

export default class App extends React.Component {
  
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCKGfk4zkMRUONCWMFV1dB1g2LilwKZ1Is',
      authDomain: 'one-time-password-43d8d.firebaseapp.com',
      databaseURL: 'https://one-time-password-43d8d.firebaseio.com',
      projectId: 'one-time-password-43d8d',
      storageBucket: 'one-time-password-43d8d.appspot.com',
      messagingSenderId: '577892069715'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
