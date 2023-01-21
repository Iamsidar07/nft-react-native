import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import nft3 from "../assets/images/nft01.jpg"
import { SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import Cta from '../components/Cta';
import Badge from '../components/Badge';
import Activity from '../components/Activity';

const DetailScreen = () => {
  const route = useRoute();
  const imageUrl = route.params;

  return (
    <ImageBackground source={imageUrl}
      resizeMode="cover" blurRadius={80} 
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <SafeAreaView style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#f1f1f1",
      }}>
        <Header title={"Nft"} subTitle={"#00079"} icon={<Ionicons name="ios-reorder-three-outline" size={44} color="black" />} />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
          paddingBottom:"5%"
        }}>
          
          <View style={{
            width: "100%",
            height: 450,
            padding:20,
            marginTop:"5%",
          }}>
            <Image source={imageUrl}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 25,
                shadowColor: "#d2cdcd",
                shadowOffset: {
                  width: 0,
                  height: 15,
                },
                shadowOpacity: 0.24,
                shadowRadius: 16.41,
                elevation: 20
              }}
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
              marginTop:"4%"
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
                <TouchableOpacity style={{ backgroundColor: "white",borderRadius:70,width:45,height:45,alignItems:"center",justifyContent:"center",marginRight:5 }} >
                <EvilIcons name="heart" size={30} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "white",borderRadius:70,width:45,height:45,alignItems:"center",justifyContent:"center" }} >
                  <EvilIcons name="share-apple" size={30} color="gray" />
                </TouchableOpacity>
                
              </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5,backgroundColor:"white",padding:5,borderRadius:20,}}>
              <Image source={imageUrl} resizeMode="contain" style={{width:40,height:40,borderRadius:20,marginRight:10,}}/>
              <Text style={{
                fontFamily: "SpaceGrotesk-SemiBold",
                fontSize: 16,
              }}>@Openart</Text>
            </View>
            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              color:"gray",
              fontSize: 16,
              padding:5,
            }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime aspernatur id! Vel nemo reprehenderit officia amet quod facilis harum. Lorem ipsum dolor sit</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 15, }}>
              <Badge title={"fficia"}/>
            </View>
            <Cta prefixIcon={<SimpleLineIcons name="share-alt" size={18} color="black" />} title={"View on Etherscan"} suffixIcon={<SimpleLineIcons name="share-alt" size={20} color="gray" />} />
            <Cta prefixIcon={<EvilIcons name="star" size={24} color="black" />} title={"View on IPFS"} suffixIcon={<SimpleLineIcons name="share-alt" size={20} color="gray" />} />
            <Cta prefixIcon={<EvilIcons name="star" size={24} color="black" />} title={"View on IPFS metadata"} suffixIcon={<SimpleLineIcons name="share-alt" size={18} color="gray" />} />

            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              fontSize: 24,
              padding: 10,
            }}>Live biding</Text>
            <View style={{
              padding: "7%",
              backgroundColor: "white",
              marginTop: 20,
              borderRadius: 30,
              shadowColor: "white",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}>
              <Text style={{
                fontFamily: "SpaceGrotesk-Regular",
                color: "gray",
                fontSize: 28,
              }}>Current Bid</Text>
              <Text style={{
                fontFamily: "SpaceGrotesk-SemiBold",
                fontSize: 30,
              }}>0.50 ETH <Text style={{
                fontFamily: "SpaceGrotesk-Bold",
                fontSize: 18,
                color: "gray"
              }}>$1,659.95</Text></Text>
              <View style={{
                marginVertical: "10%",
              }}>
                <Text style={{
                  fontFamily: "SpaceGrotesk-Regular",
                  fontSize: 28,
                  color: "gray"
                }}>Auction ending in</Text>
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <View>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Medium",
                      fontSize: 38,
                    }}>12</Text>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Regular",
                      fontSize: 18,
                      color: "gray"
                    }}>hours</Text>
                  </View>
                  <View>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Medium",
                      fontSize: 38,
                    }}>12</Text>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Regular",
                      fontSize: 18,
                      color: "gray"
                    }}>minutes</Text>
                  </View>
                  <View>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Medium",
                      fontSize: 38,
                    }}>12</Text>
                    <Text style={{
                      fontFamily: "SpaceGrotesk-Regular",
                      fontSize: 18,
                      color: "gray"
                    }}>seconds</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={{
                backgroundColor: "#3a25f8",
                padding: 15,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 5,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
              }}>

                <Text style={{
                  fontFamily: "SpaceGrotesk-SemiBold",
                  fontSize: 18,
                  color: "white"
                }}>Place a bid</Text>

              </TouchableOpacity>
            </View>
            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              fontSize: 24,
              padding: 10,
            }}>Activity</Text>
            <Activity image={imageUrl} username="oneart" />
            <Activity image={imageUrl} username="oneart" />
            <Activity image={imageUrl} username="oneart" />
          </View>
          
        </ScrollView>
        <BottomNavigation />
      </SafeAreaView>
    </ImageBackground >
  )
}

export default DetailScreen