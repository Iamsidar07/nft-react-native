import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
    const navigation = useNavigation();
    return (
        <View style={[{
            padding: 5,
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#6319b8",
            // bottom:5,
            // borderRadius:40,
        },styles.glass]}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <AntDesign name="home" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="plus" size={20} color="white" style={{
                    backgroundColor: "#6319b8",
                    borderRadius: 50,
                    padding: 7,
                }} />

            </TouchableOpacity>
            <TouchableOpacity>
                <SimpleLineIcons name="graph" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="user" size={20} color="black" />
            </TouchableOpacity>
        </View>

    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    glass: {
        backgroundColor: "rgba(255, 255, 255, 0.13)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.23)",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})