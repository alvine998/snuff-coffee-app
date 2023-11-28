import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import normalize from 'react-native-normalize'
import { COLOR } from '../../utils/color'
import { StackActions } from '@react-navigation/native'

export default function Splash({ navigation }: any) {
    const fullHeight = Dimensions.get('window').height
    const fullWidth = Dimensions.get('window').width
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace("Intro"))
        }, 1500)
    })
    return (
        <View style={{ height: fullHeight, width: fullWidth, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <Text style={{ fontSize: normalize(36), fontFamily: "serif", color: COLOR.gold }}>Snuff Coffee</Text>
        </View>
    )
}