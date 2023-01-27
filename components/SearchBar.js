import { View,  TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = ({prefix,suffix,...otherProps}) => {
  return (
    <View style={[{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:10,
        marginTop:10,
        // padding:2,
        borderRadius:3,
    },styles.glass]}>
        {prefix}
        <TextInput 
        style={{
            flex:1,
            fontFamily:"SpaceGrotesk-Regular",
            paddingVertical:7,
            fontSize:14,
            color:"gray"
            
        }}
        {...otherProps}
        
        />
        {suffix}
      
    </View>
  )
}

export default SearchBar

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