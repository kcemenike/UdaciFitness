import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'

export default function UdaciSlider({ max, unit, step, value, onChange }) {
    return (
        <View style={[styles.row]}>
            <Slider
                style={{ flex: 1 }}
                step={step}
                value={value}
                minimumValue={0}
                maximumValue={max}
                onValueChange={onChange}
            />
            <View style={styles.metricCounter}>
                <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    }
})