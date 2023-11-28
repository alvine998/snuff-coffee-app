import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import { COLOR } from '../../utils/color'
import { intro1, intro2, intro3 } from '../../assets'

export default function Intro({ navigation }: any) {
    const fullHeight = Dimensions.get('window').height
    const fullWidth = Dimensions.get('window').width

    const intros: any[] = [
        {
            title: "Udah lama gak ngopi?",
            image: intro1
        },
        {
            title: "Ngopi kok gitu-gitu aja?",
            image: intro2
        },
        {
            title: "Snuff Coffee solusinya",
            image: intro3
        }
    ]

    return (
        <View>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                {
                    intros?.map((v: any, i: number) => (
                        <View key={i} style={{ width: fullWidth, height: fullHeight, backgroundColor: COLOR.gold, justifyContent: "flex-start", alignItems: "center", paddingVertical: normalize(100) }}>
                            <Image source={v?.image} style={{ width: fullWidth, height: normalize(250), marginTop: normalize(120) }} />
                            <Text style={{ color: "black", fontSize: normalize(24), textAlign: "center", marginTop: normalize(50) }}>{v?.title}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: normalize(10), marginTop: normalize(80) }}>
                                {
                                    intros?.map((val: any, idx: number) => (
                                        <View key={idx}>
                                            {
                                                i == idx ?
                                                    <View key={idx} style={{ width: normalize(15), height: normalize(15), borderRadius: 15, backgroundColor: "white" }}></View>
                                                    :
                                                    <View key={idx} style={{ width: normalize(10), height: normalize(10), borderRadius: 10, backgroundColor: i == idx ? COLOR.gold : "black" }}></View>
                                            }
                                        </View>
                                    ))
                                }
                            </View>
                            {
                                i == 2 && <TouchableOpacity style={{ width: normalize(250), height: normalize(40), borderRadius: 20, backgroundColor: COLOR.blue, marginTop: normalize(20), justifyContent: "center", alignItems: "center" }} 
                                onPress={() => {navigation.push("Login")}}>
                                    <Text style={{ color: "white", fontSize: normalize(18) }}>Selesai</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}