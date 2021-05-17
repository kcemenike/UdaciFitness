import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native'
import Slider from '@react-native-community/slider'

import AddEntry from './components/AddEntry'
import Touchables from './components/Touchables'
import FormTest from './components/FormTest'


export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <FormTest />
        {/* <AddEntry /> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
