import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  getMetricMetaInfo, timeToString
} from '../utils/helpers'
import Slider from './UdaciSlider'
import Stepper from './UdaciStepper'
import DateHeader from './DateHeader'

import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text>Submit</Text>
    </TouchableOpacity>
  )
}
export default class AddEntry extends Component {
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

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      eat: 0,
      sleep: 0
    }))

    // update Redux
    // navigate to home
    // save to DB
    // clear local noification
  }
  reset = () => {
    const key = timeToString()

    // update redux
    // route to home
    // update DB

  }
  render() {
    const metaInfo = getMetricMetaInfo()

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name='ios-happy-outline'
            size={100}
          />
          <Text>You've already logged today's info</Text>
          <TextButton onPress={this.reset}>
            Reset
        </TextButton>
        </View>
      )
    }

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        <Text>{JSON.stringify(this.state)}</Text>
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]
          return (
            <View key={key}>
              <Text>{rest.displayName}</Text>
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