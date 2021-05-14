import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, StyleSheet, TouchableOpacity
} from 'react-native'
import AddEntry from './components/AddEntry'
import Touchables from './components/Touchables'

export default class App extends React.Component {
  // componentDidMount() {
  //   console.log('before')
  //   debugger
  //   console.log('after')
  // }
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <View style={styles.container}>
        <Touchables />
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
