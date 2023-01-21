import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#6319b8",
            bottom:5,
            borderRadius:40,
            shadowColor: "white",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <AntDesign name="home" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="plus" size={30} color="#6319b8" style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    padding: 7,
                }} />

            </TouchableOpacity>
            <TouchableOpacity>
                <SimpleLineIcons name="graph" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="user" size={28} color="white" />
            </TouchableOpacity>
        </View>

    )
}

export default BottomNavigation