import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  getMetricMetaInfo, timeToString
} from '../utils/helpers'
import Slider from './UdaciSlider'
import Stepper from './UdaciStepper'
import DateHeader from './DateHeader'

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

  render() {
    const metaInfo = getMetricMetaInfo()

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
                  onChange={(value) => this.slider(key, value)}
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