import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
const Activity = ({ image, username }) => {
    return (
        <TouchableOpacity style={[{
            // backgroundColor: "white",
            padding: 15,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
        },styles.glass]} >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
            }} >
                <Image source={image} resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 30, marginRight: 10, }} />
                <View>
                    <Text style={{
                        fontFamily: "SpaceGrotesk-SemiBold",
                        fontSize: 14,
                    }}>Bid placed by @{username}</Text>
                    <Text style={{
                        fontFamily: "SpaceGrotesk-Regular",
                        fontSize: 12,
                        color: "black"
                    }}>june 26, 2021 at 12:00am</Text>
                    <Text style={{
                        fontFamily: "SpaceGrotesk-Bold",
                        fontSize: 14,
                    }}>0.45 ETH <Text style={{
                        fontFamily: "SpaceGrotesk-Bold",
                        fontSize: 12,
                        color: "black"
                    }}>$6892.45</Text></Text>
                </View>
            </View>
            <EvilIcons name="share-google" size={34} color="black" />
        </TouchableOpacity>
    )
}

export default Activity

const styles = StyleSheet.create({
    glass: {
        backgroundColor:"rgba(255, 255, 255, 0.13)", 
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.25)",
        shadowColor: "black",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
    }
})
