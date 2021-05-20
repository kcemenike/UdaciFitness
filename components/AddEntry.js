import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, Platform, StyleSheet, Dimensions
} from 'react-native'
import {
  getMetricMetaInfo, timeToString, getDailyReminderValue
} from '../utils/helpers'
import Slider from './UdaciSlider'
import Stepper from './UdaciStepper'
import DateHeader from './DateHeader'

import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'

import { submitEntry, removeEntry } from '../utils/API'

import { connect } from 'react-redux'
import { addEntry } from '../actions'
import { purple, white } from '../utils/colors'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onPress}
    >
      <Text
        style={styles.submitBtnText}
      >SUBMIT</Text>
    </TouchableOpacity>
  )
}
class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    eat: 0,
    sleep: 0
  }
  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }
  decrement = (metric) => {
    const { step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] - step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }
  submit = () => {
    const key = timeToString()
    const entry = this.state

    // update Redux
    this.props.dispatch(addEntry({
      [key]: entry
    }))

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      eat: 0,
      sleep: 0
    }))

    // navigate to home
    submitEntry({ key, entry })
    // save to DB
    // clear local noification
  }
  reset = () => {
    const key = timeToString()

    // update redux
    this.props.dispatch(addEntry({
      [key]: getDailyReminderValue()
    }))
    console.log(this.state)
    console.log(this.props)

    // route to home
    // update DB
    removeEntry(key)

  }
  render() {
    const metaInfo = getMetricMetaInfo()

    if (this.props.alreadyLogged) {
      return (
        <View style={styles.center}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-happy' : 'md-happy'}
            size={100}
          />
          <Text>You've already logged today's info</Text>
          <TextButton style={{ padding: 10 }} onPress={this.reset}>
            Reset
        </TextButton>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {/* <Text>{JSON.stringify(this.state)}</Text> */}
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]
          return (
            <View key={key} style={styles.row}>
              {/* <Text>{rest.displayName}</Text> */}
              {getIcon()}
              {type === 'slider'
                ? <Slider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
                : <Stepper
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View >
    )
  }
}

const { width, height } = Dimensions.get('window')
console.log(width, height)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }
})

function mapStateToProps(state) {
  const key = timeToString()

  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined'
  }
}

export default connect(mapStateToProps)(AddEntry)