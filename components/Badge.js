import { View, Text } from 'react-native'
import React from 'react'

const Badge = ({title}) => {
  return (
      <Text style={{
          fontFamily: "SpaceGrotesk-Regular",
          color: "gray",
          fontSize: 14,
          backgroundColor: "white",
          borderRadius: 40,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginRight: 5,
          borderWidth: 1,
          borderColor: "gray"
      }}>#{title}</Text>
  )
}

export default Badge