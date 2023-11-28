import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import normalize from 'react-native-normalize'
import { COLOR } from '../../utils/color'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }: any) {
    const fullHeight = Dimensions.get('window').height
    const fullWidth = Dimensions.get('window').width
    const [show, setShow] = useState<boolean>(false)
    const [payload, setPayload] = useState<any>({
        email: '',
        password: ''
    })

    const login = async () => {
        try {
            if (!payload.email) {
                return Alert.alert("Harap isi email!")
            }
            if (!payload.password) {
                return Alert.alert("Harap isi password!")
            }
            if (payload?.email == "user@gmail.com") {
                if (payload?.password == "user1234") {
                    AsyncStorage.setItem('session', JSON.stringify(payload))
                    navigation.push("Home")
                    return
                } else {
                    return Alert.alert("Password salah!")
                }
            } else {
                return Alert.alert("Email tidak terdaftar!")
            }
        } catch (error) {
            console.log(error);
            return Alert.alert("Internal Server Error!")
        }
    }
    return (
        <ScrollView style={{ backgroundColor: COLOR.gold, width: fullWidth, height: fullHeight }}>
            <View style={{ justifyContent: "center", alignItems: "center", width: "100%", height: fullHeight }}>
                <Text style={{ color: "black", fontFamily: "serif", fontSize: normalize(26), fontWeight: "500" }}>LOGIN SNUFF APP</Text>
                <View style={{ marginTop: normalize(50), paddingHorizontal: normalize(50) }}>
                    <Text style={{ color: "black", marginLeft: normalize(10) }}>Email</Text>
                    <View style={{ flexDirection: "row", padding: normalize(5), paddingLeft: normalize(20), alignItems: "center", backgroundColor: "white", width: normalize(300), height: normalize(40), borderRadius: 20, marginTop: normalize(5) }}>
                        <TextInput value={payload?.email} onChangeText={(e) => { setPayload({ ...payload, email: e }); }} placeholder='Masukkan email' placeholderTextColor={"gray"} style={{ color: "black", height: normalize(40), width: normalize(300) }} />
                    </View>
                    <Text style={{ color: "black", marginTop: normalize(10), marginLeft: normalize(10) }}>Password</Text>
                    <View style={{ flexDirection: "row", padding: normalize(5), paddingHorizontal: normalize(20), alignItems: "center", backgroundColor: "white", width: normalize(300), height: normalize(40), borderRadius: 20, marginTop: normalize(5), justifyContent: "space-between" }}>
                        <TextInput value={payload?.password} onChangeText={(e) => { setPayload({ ...payload, password: e }) }} secureTextEntry={show ? false : true} placeholder='Masukkan password' placeholderTextColor={"gray"} style={{ color: "black", height: normalize(40), width: normalize(250) }} />
                        <TouchableOpacity onPress={() => setShow(!show)}>
                            <IconFA5 name={show ? 'eye' : 'eye-slash'} color={"#808080"} size={normalize(20)} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={login}>
                        <View style={{ width: "100%", height: normalize(40), borderRadius: 20, backgroundColor: COLOR.blue, marginTop: normalize(20), justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: normalize(18), textAlign: "center" }}>Masuk</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}