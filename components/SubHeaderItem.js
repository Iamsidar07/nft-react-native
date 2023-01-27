import {  Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const SubHeaderItem = ({ title, imageUrl, }) => {

  return (
    <TouchableOpacity style={[{
      paddingHorizontal:10,
      paddingVertical:3,
      borderRadius: 7,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      flexDirection: "row",
    }, styles.glass, { backgroundColor: imageUrl ? "#6319b8": "transparent", }]}>
      {imageUrl && <Image
        source={{uri:imageUrl}}
        resizeMode="cover"
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
          borderRadius:30,
        }}
      />}
      <Text style={{
        fontSize: imageUrl?14:16,
        fontFamily:"SpaceGrotesk-Regular",
        color:imageUrl?"white":"black",
      }}>
        #{title}
      </Text>
    </TouchableOpacity>
  )
}

export default SubHeaderItem

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