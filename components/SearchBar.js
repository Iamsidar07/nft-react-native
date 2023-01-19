import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchBar = ({prefix,suffix,...otherProps}) => {
  return (
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
      backgroundColor:"white",
        marginHorizontal:10,
        marginTop:10,
        padding:2,
        borderRadius:3,
        shadowColor:"white",
        shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    }}>
        {prefix}
        <TextInput 
        style={{
            flex:1,
            fontFamily:"SpaceGrotesk-Regular",
            paddingHorizontal:15,
            paddingVertical:10,
            fontSize:16,
            color:"gray"
            
        }}
        {...otherProps}
        
        />
        {suffix}
      
    </View>
  )
}

export default SearchBar