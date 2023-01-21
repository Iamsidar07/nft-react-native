import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

const NftCard = ({ imageUrl, profilePicture }) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  
 
  return (
    <View >
      <View style={{
        backgroundColor: "white",
        marginBottom: 7,
        borderRadius: 8,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate("Detail", imageUrl)}>
          <Image
            source={imageUrl}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 270,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
        </TouchableOpacity>
        <View style={{
          padding:5,
          paddingHorizontal:10,
        }}>
          <Text style={{
            fontFamily: "SpaceGrotesk-SemiBold",
            fontSize: 16,
          }} numberOfLines={1} adjustsFontSizeToFit >Manoj </Text>
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
                <Image source={profilePicture} resizeMode="contain" style={{ width: 40, height: 40, borderRadius: 50, marginRight: 5 }} />
                <Text style={{
                  position: "absolute",
                  right: 6,
                  top: 5,
                  fontSize: 24,
                  backgroundColor: "green",
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
                  Pawel Panwedilal
                </Text>
                <Text style={{
                  fontFamily: "SpaceGrotesk-Regular",
                  fontSize: 12,
                  fontWeight: "500",
                  color: "gray"
                }}>
                  Creator
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

      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding:5,
        marginBottom:7,
        borderRadius:30,
        shadowColor: "black",
        shadowOffset: {
          width: 5,
          height: 15,
        },
        shadowOpacity: 0.24,
        shadowRadius: 16.41,
        elevation: 20,
        backgroundColor:"white"
      }}>
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
              fontSize: 18,
              color: "gray"
            }}>
              Current bid
            </Text>
            <Text style={{
              fontFamily: "SpaceGrotesk-SemiBold",
              fontSize: 22,
            }}>
              0.5ETH
            </Text>
          </View>
        </View>
        <View style={{
          alignItems: "center"
        }}>
          <Text style={{
            fontFamily: "SpaceGrotesk-Regular",
            fontSize: 18,
            color: "gray"
          }}>
            Ending in
          </Text>
          <Text style={{
            fontFamily: "SpaceGrotesk-SemiBold",
            fontSize: 22,
          }}>
            8h34m6s
          </Text>
        </View>

      </View>


    </View>
  )
}

export default NftCard