import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  // componentDidMount() {
  //   console.log('before')
  //   debugger
  //   console.log('after')
  // }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
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
