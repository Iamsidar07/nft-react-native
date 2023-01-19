import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NftCard = ({imageUrl}) => {
  const navigation=useNavigation();
  
  
  return (
    <View style = {{
      width: "100%",
      height: 390,
      marginVertical:5,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail",imageUrl)}>
        <Image
          source={imageUrl}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 25,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NftCard