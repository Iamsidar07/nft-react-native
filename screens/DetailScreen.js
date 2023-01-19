import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import nft3 from "../assets/images/nft01.jpg"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();
  const imageUrl = route.params;

  return (
    <ImageBackground source={imageUrl}
      resizeMode="cover" blurRadius={20}
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
        height: "100%"
      }}>

        <ScrollView contentContainerStyle={{
          paddingBottom:"5%"
        }}>
          <Header title={"Nft"} subTitle={"#00079"} icon={<Ionicons name="ios-reorder-three-outline" size={44} color="black" />} />
          <View style={{
            paddingHorizontal: 10,
            alignItems: "center",
            marginTop: "10%"
          }}>
            <View style={{
              width: "100%",
              height: 400,
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
              marginTop: "5%",
            }}>
              <Text style={{
                fontSize: 30,
                fontFamily: "SpaceGrotesk-Regular",
                textAlign: "center"
              }}>Highest Bid
              </Text>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              >

                <MaterialCommunityIcons name="ethereum" size={48} color="black" />
                <Text style={{
                  fontSize: 40,
                  fontFamily: "SpaceGrotesk-Bold",
                  textAlign: "center"
                }}>0.0878 ETH</Text>
              </View>
            </View>
            <Text style={{
              fontFamily: "SpaceGrotesk-Regular",
              fontSize: 15,
              color:"white"
            }}>
              Non-fungible tokens (NFTs) are a type of digital asset that represents ownership of a unique item or piece of content, such as artwork.
            </Text>
          </View>
        </ScrollView>
        <BottomNavigation />
      </SafeAreaView>
    </ImageBackground >
  )
}

export default DetailScreen