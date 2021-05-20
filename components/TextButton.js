import React from 'react'
import {
  Text, TouchableOpacity, StyleSheet
} from 'react-native'
import { blue, purple } from '../utils/colors'

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[styles.reset, style]}
      >{children}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
    width: 80,
    borderColor: blue,
    borderWidth: 0.1,
    borderRadius: 10,
    marginTop: 10,
  }
})