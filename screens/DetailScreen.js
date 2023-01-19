import { View, Text, SafeAreaView, Image } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import nft3 from "../assets/images/nft06.jpeg"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();
  const imageUrl = route.params;

  return (
    <SafeAreaView style={{
      display:"flex",
      justifyContent:"space-between",
      height:"100%"
    }}>
      <View>
        <Header title={"Nft"} subTitle={"#00079"} icon={<Ionicons name="ios-reorder-three-outline" size={44} color="black" />} />
        <View style={{
          paddingHorizontal: 10,
          alignItems: "center",
          marginTop:"10%"
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
                borderRadius:25
              }}
            />

          </View>
          <View style={{
            marginTop: "5%",
          }}>
            <Text style={{
              fontSize: 30,
              fontFamily: "AnekDevanagari-Regular",
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
                fontFamily: "AnekDevanagari-Bold",
                textAlign: "center"
              }}>0.0878 ETH</Text>
            </View>
          </View>
        </View>
      </View>
      <BottomNavigation />
    </SafeAreaView>
  )
}

export default DetailScreen