import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

const NftCard = ({ nft }) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  
 
  return (
    <View >
      <View style={{
        marginBottom: 7,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate("Detail", nft)}>
          <Image
            source={{uri:nft.img}}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 361,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
        </TouchableOpacity>
        <View style={[{
          padding:5,
          paddingHorizontal:10,
        }, styles.glass, { borderBottomLeftRadius:10,borderBottomRightRadius:10}]}>
          <Text style={{
            fontFamily: "SpaceGrotesk-SemiBold",
            fontSize: 16,
          }} numberOfLines={1} adjustsFontSizeToFit >{nft.name}</Text>
          <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 5,
          }}>
            <View style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}>
              <View>
                <Image source={{uri:nft.owner.img}} resizeMode="contain" style={{ width: 40, height: 40, borderRadius: 50, marginRight: 5 }} />
                <Text style={{
                  position: "absolute",
                  right: 6,
                  top: 5,
                  fontSize: 24,
                  backgroundColor: "blue",
                  width: 10,
                  height: 10,
                  borderRadius: 40,
                }}></Text>
              </View>

              <View>
                <Text style={{
                  fontFamily: "SpaceGrotesk-SemiBold",
                  fontSize: 14,
                }}>
                  {nft.owner.name}
                </Text>
                <Text style={{
                  fontFamily: "SpaceGrotesk-Regular",
                  fontSize: 12,
                  fontWeight: "500",
                  color: "gray"
                }}>
                  {nft.owner.type}
                </Text>
              </View>
            </View>
            {
              isLiked
                ?
                <FontAwesome name="heart" size={29} color="red" onPress={() => setIsLiked(!isLiked)} />
                :
                <EvilIcons name="heart" size={29} color="black" onPress={() => setIsLiked(!isLiked)} />
            }

          </View>
        </View>
      </View>

      <View style={[{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding:5,
        marginBottom:7,
      }, styles.glass, { borderRadius: 30, }]}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>


          <View style={{
            alignItems:"center"
          }}>
            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              fontSize: 14,
              color: "gray"
            }}>
              Current bid
            </Text>
            <Text style={{
              fontFamily: "SpaceGrotesk-SemiBold",
              fontSize:16,
            }}>
              {nft.currentBidInEth}ETH
            </Text>
          </View>
        </View>
        <View style={{
          alignItems: "center"
        }}>
          <Text style={{
            fontFamily: "SpaceGrotesk-Regular",
            fontSize: 14,
            color: "gray"
          }}>
            Ending in
          </Text>
          <Text style={{
            fontFamily: "SpaceGrotesk-SemiBold",
            fontSize: 16,
          }}>
            8h34m6s
          </Text>
        </View>

      </View>


    </View>
  )
}

export default NftCard

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