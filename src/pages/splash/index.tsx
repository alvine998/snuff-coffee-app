import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import { COLOR } from '../../utils/color'

export default function Splash() {
    const fullHeight = Dimensions.get('window').height
    const fullWidth = Dimensions.get('window').width
    return (
        <View style={{ height: fullHeight, width: fullWidth, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <Text style={{ fontSize: normalize(36), fontFamily: "serif", color: COLOR.gold }}>Snuff Coffee</Text>
        </View>
    )
}