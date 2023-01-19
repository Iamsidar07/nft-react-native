import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SubHeaderItem = ({ title, imageUrl,backgroundColor }) => {
  return (
    <TouchableOpacity style={{
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: backgroundColor ? backgroundColor :"#f1f5ff",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      flexDirection: "row",
      shadowColor: "white",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    }}>
      {imageUrl && <Image
        source={imageUrl}
        resizeMode="contain"
        style={{
          width: 50,
          height: 50,
          marginRight: 10,
        }}
      />}
      <Text style={{
        fontSize: imageUrl?16:24,
        fontFamily:"AnekDevanagari-Medium",
        color:backgroundColor?"white":"black",
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default SubHeaderItem