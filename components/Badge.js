import {  Text, StyleSheet } from 'react-native'
import React from 'react'

const Badge = ({title}) => {
  return (
      <Text style={[{
          fontFamily: "SpaceGrotesk-Regular",
          color: "gray",
          fontSize: 14,
          borderRadius: 40,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginRight: 5,
          borderWidth: 0.2,
          borderColor: "gray"
      },styles.glass]}>#{title}</Text>
  )
}

export default Badge

const styles = StyleSheet.create({
  glass: {
    backgroundColor: "rgba(255, 255, 255, 0.13)", 
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