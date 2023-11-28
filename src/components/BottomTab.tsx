import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home';
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconFEA from 'react-native-vector-icons/Feather'
import normalize from 'react-native-normalize';
import { COLOR } from '../utils/color';

export default function BottomTab({ navigation }: any) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: "Beranda", tabBarIcon: ({ focused }) => (<IconFA5 name='home' size={normalize(24)} color={focused ? COLOR.blue : COLOR.gold} />) }} />
            <Tab.Screen name='Menu' component={Home} options={{ tabBarLabel: "Menu", tabBarIcon: ({ focused }) => (<IconFEA name='menu' size={normalize(24)} color={focused ? COLOR.blue : COLOR.gold} />) }} />
            <Tab.Screen name='Order' component={Home} options={{
                tabBarIcon: ({ focused }) => <TouchableOpacity onPress={() => { navigation.push("Home") }} style={{ width: normalize(70), height: normalize(70), borderRadius: 70, backgroundColor: focused ? COLOR.blue : COLOR.gold, position: "absolute", bottom: normalize(0), justifyContent: "center", alignItems: "center" }}>
                    <IconFA5 name='plus' size={40} color={focused ? COLOR.gold : "white"} />
                </TouchableOpacity>, tabBarLabel: ""
            }} />
            <Tab.Screen name='Pesanan' component={Home} options={{ tabBarLabel: "Pesanan", tabBarIcon: ({ focused }) => (<IconFA5 name='clipboard-list' size={normalize(24)} color={focused ? COLOR.blue : COLOR.gold} />) }} />
            <Tab.Screen name='Profil' component={Home} options={{ tabBarLabel: "Profil", tabBarIcon: ({ focused }) => (<IconFA5 name='user' size={normalize(24)} color={focused ? COLOR.blue : COLOR.gold} />) }} />
        </Tab.Navigator>
    )
}