import React from 'react'
import {
  View, Text, TouchableOpacity, Platform, StyleSheet
} from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { black, gray, purple, white } from '../utils/colors'

export default function UdaciStepper({
  unit, value, onIncrement, onDecrement
}) {
  return (
    <View style={[styles.row, { justifyContent: 'space-between' }]}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn,
          { borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: 0 }]}
          onPress={onDecrement}>
          {Platform.OS === 'ios'
            ? <Entypo name='minus' size={30} color={black} />
            : <FontAwesome name='minus' size={30} color={black} />}

        </TouchableOpacity>
        <TouchableOpacity
          style={[Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn,
          { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 1 }]}
          onPress={onIncrement}>
          {Platform.OS === 'ios'
            ? <Entypo name='plus' size={30} color={black} />
            : <FontAwesome name='plus' size={30} color={black} />}
        </TouchableOpacity>
      </View>
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  },
  androidBtn: {
    // backgroundColor: white,
    // borderColor: purple,
    // borderWidth: 1,
    // borderRadius: 3,
    // padding: 5,
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,

  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  }
})