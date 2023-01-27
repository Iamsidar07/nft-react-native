import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
const Header = ({title,subTitle,icon}) => {
    return (
        <SafeAreaView>
            {/* header  */}
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                paddingHorizontal: 10,
                paddingTop: 40,
                
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        fontSize: 24,
                        color: "#9C9C9C",
                        fontFamily: 'SpaceGrotesk-SemiBold'
                    }}>
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'SpaceGrotesk-Bold'
                        }}>
                        #{subTitle}
                    </Text>
                </View>
                <TouchableOpacity>
                    {/* {icon} */}
                    <Ionicons name="ios-menu-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Header