import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import SubHeaderItem from '../components/SubHeaderItem';
import { AntDesign } from '@expo/vector-icons';
import NftCard from '../components/NftCard';
import bg2 from "../assets/images/bg4.png"
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import SearchBar from '../components/SearchBar';
import { EvilIcons } from '@expo/vector-icons';

import { nfts, hashtags } from '../content';

const HomeScreen = () => {
  return (
    <ImageBackground source={bg2} resizeMode="cover" blurRadius={5} style={StyleSheet.absoluteFillObject}>

    <SafeAreaView style={{
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      // backgroundColor: "#f1f1f1",
    }}>
      {/* header  */}
      <Header title="Discover" subTitle="Your Nft's" icon={<Ionicons name="ios-reorder-three-outline" size={44} color="black" />} />
      <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{
        padding:7,
      }}>
        {/* search bar  */}s
        <SearchBar
          prefix={<EvilIcons name="search" size={34} color="#a79afd" />}
          placeholder="Search nfts in your way"
          cursorColor={"black"} />

        {/* sub header  */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
          paddingHorizontal: 5,
          paddingTop: 10,
        }}>
          {
            hashtags.map((item, index) => <SubHeaderItem key={index} title={item.hashtag} imageUrl={item.img} />)
          }
        </ScrollView>

        {/* main section  */}

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center",
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: '100',
              color: "#9C9C9C",
              marginRight: 3,
              fontFamily: "SpaceGrotesk-Light"
            }}>
              Explore
            </Text>
            <Text style={{
              fontSize: 20,
              fontFamily: "SpaceGrotesk-Medium"
            }}
            >
              Nfts
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="arrowright" size={24} color="#9C9C9C" />
          </TouchableOpacity>
        </View>
        {/* nft cards  */}

        <ScrollView contentContainerStyle={{
          paddingBottom: "5%",
          paddingHorizontal: "1%",
        }}>
          {
            nfts.map((nft, index) => <NftCard key={index} nft={nft} />)
          }
        </ScrollView>
      </ScrollView>
      {/* bottom navigation  */}
      <BottomNavigation />
    </SafeAreaView>

    </ImageBackground>
  )
}

export default HomeScreen

