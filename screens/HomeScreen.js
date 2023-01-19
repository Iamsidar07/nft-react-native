import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import SubHeaderItem from '../components/SubHeaderItem';
import { AntDesign } from '@expo/vector-icons';
import NftCard from '../components/NftCard';
import image2 from "../assets/images/person02.png"
import image3 from "../assets/images/person03.png"
import nft2 from "../assets/images/nft02.jpeg"
import nft3 from "../assets/images/nft03.jpeg"
import nft1 from "../assets/images/nft04.jpg"
import nft4 from "../assets/images/nft05.jpg"
import nft5 from "../assets/images/nft06.jpg"
import nft6 from "../assets/images/nft07.jpg"
import nft7 from "../assets/images/nft08.jpg"
import nft8 from "../assets/images/nft09.jpg"
import nft9 from "../assets/images/nft10.jpg"

import bg2 from "../assets/images/bg2.jpg"
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import { EvilIcons } from '@expo/vector-icons';



const HomeScreen = () => {
  return (
    <SafeAreaView style={{
      height:"100%",
      display:"flex",
      justifyContent:"space-between",
      backgroundColor:"#e9ecfa",
    }}>
      {/* header  */}
      <ScrollView showsVerticalScrollIndicator={false} >
      <Header title="Discover" subTitle="Your Nft's" icon={<Ionicons name="ios-reorder-three-outline" size={44} color="black" />} />


        {/* search bar  */}
        <SearchBar
          prefix={<EvilIcons name="search" size={34} color="#a79afd" />}
          placeholder="Search nfts in your way"
          cursorColor={"black"} />

        {/* sub header  */}
        <ScrollView horizontal contentContainerStyle={{
          paddingHorizontal: 5,
          paddingTop: 10,
        }}>
          <SubHeaderItem title={"Art"} imageUrl={image3} backgroundColor={"#6319b8"} />
          <SubHeaderItem title={"📸"} />
          <SubHeaderItem title={"Queen"} imageUrl={image2} />
          <SubHeaderItem title={"❤️‍🔥"} />
        </ScrollView>

        {/* main section  */}

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center",
          }}>
            <Text style={{
              fontSize: 22,
              fontWeight: '100',
              color: "#9C9C9C",
              marginRight: 3,
              fontFamily: "SpaceGrotesk-Light"
            }}>
              Best
            </Text>
            <Text style={{
              fontSize: 24,
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
        <ScrollView   contentContainerStyle={{
          paddingBottom:"5%",
          paddingHorizontal:"3%",
          alignItems:"center",
        }}>
          <NftCard imageUrl={nft8} />
          <NftCard imageUrl={nft7} />
          <NftCard imageUrl={nft9} />
          <NftCard imageUrl={nft6} />
          <NftCard imageUrl={nft4} />
          <NftCard imageUrl={nft5} />
          <NftCard imageUrl={nft1} />
          <NftCard imageUrl={bg2} />
          <NftCard imageUrl={nft2} />
          <NftCard imageUrl={nft3} />
        </ScrollView>
      </ScrollView>
      {/* bottom navigation  */}
      <BottomNavigation />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})