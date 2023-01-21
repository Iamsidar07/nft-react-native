import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
const Activity = ({image,username}) => {
  return (
      <TouchableOpacity style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 5,
          shadowColor: "white",
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
      }}>
          <Image source={image} resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 30, marginRight: 10, }} />
          <View>
          <Text style={{
              fontFamily: "SpaceGrotesk-SemiBold",
              fontSize: 16,
          }}>Bid placed by @{username}</Text>
          <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              fontSize: 16,
              color:"gray"
          }}>june 26, 2021 at 12:00am</Text>
          <Text style={{
              fontFamily: "SpaceGrotesk-Bold",
              fontSize: 26,
              }}>0.45 ETH <Text style={{
                  fontFamily: "SpaceGrotesk-Bold",
                  fontSize: 16,
                  color: "gray"
              }}>$6892.45</Text></Text>
          </View>
          <SimpleLineIcons name="share-alt" size={18} color="gray" />
      </TouchableOpacity>
  )
}

export default Activity