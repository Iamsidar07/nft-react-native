import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Cta = ({ prefixIcon, title, suffixIcon }) => {
  return (

    <TouchableOpacity style={{
      backgroundColor: "white",
      padding: 20,
      borderRadius: 7,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
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
      {prefixIcon}
      <Text style={{
        fontFamily: "SpaceGrotesk-SemiBold",
        fontSize: 16,
      }}>{title}</Text>
      {suffixIcon}
    </TouchableOpacity>

  )
}

export default Cta