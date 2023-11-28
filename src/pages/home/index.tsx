import { View, Text, Dimensions, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR } from '../../utils/color'
import normalize from 'react-native-normalize'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconFEA from 'react-native-vector-icons/Feather'

export default function Home() {
    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width

    // const getUser = () => {
    //     const user = AsyncStorage.getItem('session')
    // }
    const [refresh, setRefresh] = useState<boolean>(false)
    const onRefresh = async () => {
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 2000);
    }
    return (
        <View style={{ backgroundColor: COLOR.gold, height: screenHeight, width: "100%" }}>
            <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", height: normalize(300), backgroundColor: "white", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                    <Text style={{ color: "black", fontWeight: "bold", fontFamily: "serif", fontSize: normalize(24) }}>Snuff Coffee Presenting</Text>
                </View>
                <View style={{ paddingHorizontal: normalize(20) }}>
                    <View style={{ backgroundColor: "white", width: "100%", height: normalize(70), borderRadius: 20, marginTop: normalize(-30), elevation: 3, justifyContent: "space-between", alignItems: "center", padding: normalize(10), flexDirection: "row", paddingHorizontal: normalize(30) }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>Welcome, User</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20 }}>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                                <IconFA5 name='tag' color={COLOR.gold} size={normalize(20)} />
                                <Text style={{ color: "black", fontWeight: "500" }}>0</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                                <IconFA5 name='coins' color={COLOR.gold} size={normalize(20)} />
                                <Text style={{ color: "black", fontWeight: "500" }}>0</Text>
                                <Text style={{ color: "#808080", fontWeight: "500", marginLeft: normalize(-5), fontSize: normalize(14) }}>pts</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: 'auto', borderRadius: 20, marginVertical: normalize(20), elevation: 3, justifyContent: "space-between", alignItems: "baseline", paddingHorizontal: normalize(30), paddingVertical: normalize(20), flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: normalize(40), height: normalize(40), borderRadius: 100, backgroundColor: COLOR.gold }}>
                                <IconFEA name='users' color={"white"} size={normalize(20)} />
                            </TouchableOpacity>
                            <Text style={{ color: "gray", fontWeight: "500", fontSize: normalize(14) }}>Referral</Text>
                        </View>

                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: normalize(40), height: normalize(40), borderRadius: 100, backgroundColor: COLOR.gold }}>
                                <IconFEA name='shopping-bag' color={"white"} size={normalize(20)} />
                            </TouchableOpacity>
                            <Text style={{ color: "gray", fontWeight: "500", fontSize: normalize(14) }}>Membership</Text>
                        </View>

                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: normalize(40), height: normalize(40), borderRadius: 100, backgroundColor: COLOR.gold }}>
                                <IconFA5 name='clipboard-check' color={"white"} size={normalize(18)} />
                            </TouchableOpacity>
                            <Text style={{ color: "gray", fontWeight: "500", fontSize: normalize(14) }}>Mission</Text>
                        </View>

                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: normalize(70) }}>
                            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: normalize(40), height: normalize(40), borderRadius: 100, backgroundColor: COLOR.gold }}>
                                <IconFA5 name='tag' color={"white"} size={normalize(18)} />
                            </TouchableOpacity>
                            <Text style={{ color: "gray", fontWeight: "500", fontSize: normalize(14), textAlign: "center" }}>Voucher Pack</Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", height: normalize(200), backgroundColor: "white", borderRadius: 20, marginBottom: normalize(20) }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontFamily: "serif", fontSize: normalize(24) }}>Snuff Coffee Banner</Text>
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", height: normalize(200), backgroundColor: "white", borderRadius: 20, marginBottom: normalize(70) }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontFamily: "serif", fontSize: normalize(24) }}>Snuff Coffee Banner</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}