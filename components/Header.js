import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({title,subTitle,icon}) => {
    return (
        <View>
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
                        fontSize: 34,
                        color: "#9C9C9C",
                        fontFamily: 'AnekDevanagari-Light'
                    }}>
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 24,
                            fontFamily: 'AnekDevanagari-Medium'
                        }}>
                        {subTitle}
                    </Text>
                </View>
                <TouchableOpacity style={{
                    paddingHorizontal: 5,
                    paddingVertical: 15,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#F2F2F2"
                }}>
                    {icon}
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header