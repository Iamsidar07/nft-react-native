import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import { SimpleLineIcons, EvilIcons,Entypo,FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import Cta from '../components/Cta';
import Badge from '../components/Badge';
import Activity from '../components/Activity';
import detailScreenBg from "../assets/images/bg3.png"
import { useState } from 'react';

const DetailScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const route = useRoute();
  const nft = route.params;
  const {width,height}=Dimensions.get("screen");


  return (
    
      <SafeAreaView style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        // backgroundColor: "#f1f1f1",
      }}>
        <Image source={detailScreenBg} resizeMode="cover" blurRadius={5} style={StyleSheet.absoluteFillObject}/>
        <Header title={nft.name} subTitle={nft.id} icon={<Ionicons name="ios-reorder-three-outline" size={44} color="black" />} />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
          paddingBottom:"5%"
        }}>
          
          <View style={{
            width: width,
            height: height/2+70,
            padding:"2%",
          }}>
            <Image source={{uri:nft.img}}
              resizeMode="cover"
              style={[{
                width: '100%',
                height: '100%',
                borderRadius: 20,
                shadowColor: "#d2cdcd",
                shadowOffset: {
                  width: 0,
                  height: 15,
                },
                shadowOpacity: 0.24,
                shadowRadius: 16.41,
                elevation: 20
              }]}
            />
          </View>
          <View style={{
            padding:10,
          }}>
            <View style={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"center",
              paddingHorizontal:10,
            }}>
              <Text style={{
                fontFamily:"SpaceGrotesk-Bold",
                fontSize:28,
              }}>Silent Color</Text>
              <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}>
              
                <TouchableOpacity style={[{ backgroundColor: "white",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center",marginRight:5 },styles.glass]} >
                {
                  isLiked
                    ?
                    <FontAwesome name="heart" size={24} color="red" onPress={() => setIsLiked(!isLiked)} />
                    :
                    <EvilIcons name="heart" size={29} color="black" onPress={() => setIsLiked(!isLiked)} />
                }
                </TouchableOpacity>
                <TouchableOpacity style={[{ backgroundColor: "white",borderRadius:10,width:40,height:40,alignItems:"center",justifyContent:"center" },styles.glass]} >
                  <EvilIcons name="share-apple" size={30} color="black" />
                </TouchableOpacity>
                
              </View>
            </View>
            <View style={[{flexDirection:"row",alignItems:"center",alignSelf:"flex-start",marginTop:5,backgroundColor:"white",paddingHorizontal:10 ,paddingVertical:5,borderRadius:30,},styles.glass]}>
              <Image source={{uri:nft.img}} resizeMode="contain" style={{width:30,height:30,borderRadius:20,marginRight:5,}}/>
              <Text style={{
                fontFamily: "SpaceGrotesk-SemiBold",
                fontSize: 14,
              }}>@{nft.owner.username}</Text>
            </View>
            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              color:"black",
              fontSize: 16,
              padding:5,
            }}>{nft.about}</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 15, }}>
              <Badge title={"fficia"}/>
            </View>
            <Cta prefixIcon={<Entypo name="circular-graph" size={24} color="purple" />} title={"View on Etherscan"} suffixIcon={<EvilIcons name="share-google" size={34} color="black" />} />
            <Cta prefixIcon={<Ionicons name="checkmark-done-sharp" size={24} color="violet" />} title={"View on IPFS"} suffixIcon={<EvilIcons name="share-google" size={34} color="black" />} />
            <Cta prefixIcon={<Ionicons name="shield-checkmark" size={24} color="green" />} title={"View on IPFS metadata"} suffixIcon={<EvilIcons name="share-google" size={34} color="black" />} />


            <View style={[{
              padding: "5%",
              marginTop: 20,
              borderRadius: 10,
            },styles.glass]}>
              <Text style={{
                fontFamily: "SpaceGrotesk-Regular",
                color: "black",
                fontSize: 20,
              }}>Current Bid</Text>
              <Text style={{
                fontFamily: "SpaceGrotesk-SemiBold",
                fontSize: 24,
              }}>{nft.currentBidInEth} ETH <Text style={{
                fontFamily: "SpaceGrotesk-Bold",
                fontSize: 14,
                color: "black"
              }}>{nft.currentBidIn$}$</Text></Text>
              <View style={{
                marginVertical: "5%",
              }}>
                <Text style={{
                  fontFamily: "SpaceGrotesk-Regular",
                  fontSize: 20,
                  color: "black"
                }}>Auction ending in</Text>
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <View>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Medium",
                      fontSize: 24,
                    }}>12</Text>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Regular",
                      fontSize: 14,
                      color: "black"
                    }}>hours</Text>
                  </View>
                  <View>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Medium",
                      fontSize: 24,
                    }}>12</Text>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Regular",
                      fontSize: 14,
                      color: "black"
                    }}>minutes</Text>
                  </View>
                  <View>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Medium",
                      fontSize: 24,
                    }}>12</Text>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Regular",
                      fontSize: 14,
                      color: "black"
                    }}>seconds</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={[{
                padding: 15,
                borderRadius: 1,
                alignItems: "center",
                marginTop: 25,
              },styles.glass,{ borderWidth:0,borderRadius:40,}]}>

                <Text style={{
                  fontFamily: "SpaceGrotesk-Regular",
                  fontSize: 24,
                }}>Place a bid</Text>

              </TouchableOpacity>
            </View>
            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              fontSize: 24,
              padding: 10,
            }}>Activity</Text>
            <Activity image={{uri:nft.owner.img}} username={nft.owner.username} />

          </View>
          
        </ScrollView>
        <BottomNavigation />
      </SafeAreaView>

  )
}

export default DetailScreen


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