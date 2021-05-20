import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native'
import Slider from '@react-native-community/slider'

import AddEntry from './components/AddEntry'
import Touchables from './components/Touchables'
import FormTest from './components/FormTest'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'


export default class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View
          style={styles.container}
        >
          {/* <FormTest /> */}
          <AddEntry />
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#000000',
  },
});
