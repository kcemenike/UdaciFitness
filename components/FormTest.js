import React from 'react'
import {
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  BackHandler,
  Image
} from 'react-native'

import getData from '../utils/_TestData'

function Post({ author, shortText, fullText }) {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{author}</Text>
      <Text>{shortText}</Text>
      <Text>{fullText}</Text>
    </View>
  )
}

export default class FormTest extends React.Component {

  state = {
    input: '@kcemenike',
    showInput: false,
  }

  handleToggle = () => {
    this.setState((state) => ({ showInput: !state.showInput }))
  }

  handleTextChange = (input) => {
    this.setState(() => ({ input }))
  }

  renderItem = ({ item }) => <Post {...item} />
  render() {
    const data = getData()

    const { input, showInput } = this.state


    return (
      // <View>
      //   <FlatList data={data} renderItem={this.renderItem} />
      //   {/* {data.map(({ id, author, shortText, fullText }) =>
      //     <Post
      //       key={id}
      //       author={author}
      //       shortText={shortText}
      //       fullText={fullText}
      //     />)} */}
      // </View>
      <View
        // behavior="padding"
        style={styles.container}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.img}
        />
        <Image
          source={require('../media/img/376-200x200.jpg')}
        // style={styles.img}
        />
        <Switch
          value={showInput}
          onValueChange={this.handleToggle}
        />
        {showInput === true && (
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={this.handleTextChange}
          />
        )}
        {/* <Text>{JSON.stringify(this.state)}</Text> */}
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 288,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 58
  },
  img: {
    width: 100,
    height: 100,
    margin: 50
  }
})