import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native'
import Slider from '@react-native-community/slider'

import AddEntry from './components/AddEntry'
import Touchables from './components/Touchables'

export default class App extends React.Component {
  // componentDidMount() {
  //   console.log('before')
  //   debugger
  //   console.log('after')
  // }
  state = {
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Touchables /> */}
        {/* <Slider
          value={this.state.value}
          minimumValue={-10}
          maximumValue={10}
          step={1}
          style={{ width: 200, height: 40 }}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>{JSON.stringify(this.state)}</Text> */}
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
