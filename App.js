import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, StyleSheet, Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import AddEntry from './components/AddEntry'

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
        {/* <AddEntry /> */}
        <TouchableHighlight
          style={styles.btn}
          onPress={this.handlePress}
          underlayColor='#d427b'
        >
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.btn}
          onPress={this.handlePress}
        >
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={this.handlePress}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable without Feedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.handlePress}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable native Feedback</Text>
          </View>
        </TouchableNativeFeedback>
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
  btn: {
    backgroundColor: '#e52334',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  btnText: {
    color: '#fff'
  }
});
