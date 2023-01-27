import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Cta = ({ prefixIcon, title, suffixIcon }) => {
  return (

    <View style={[{
      padding: 20,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },styles.glass]}>
      {prefixIcon}
      <TouchableOpacity><Text style={{
        fontFamily: "SpaceGrotesk-SemiBold",
        fontSize: 16,
      }}>{title}</Text></TouchableOpacity>
      <TouchableOpacity>{suffixIcon}</TouchableOpacity>
    </View>

  )
}

export default Cta

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
