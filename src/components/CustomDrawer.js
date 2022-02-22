import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from "../contants";

const Data = [{
    name: 'ali',
    email: "alihafeez909@gmail.com",
    image: require("../assets/images/down3.png"),

}
]
const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
                <View style={{  marginLeft: wp('1%'), marginTop: hp('2%') }}>
                    {Data.map((data) => {
                        return (
                            <View style={{flexDirection:'row',}}>
                                <Image source={data.image} style={styles.image1} />


                                <View>
                                    <Text style={styles.texta}>{data.name}</Text>
                                    <Text style={styles.textb}>{data.email}</Text>
                                </View>
                            </View>
                        )
                    })
                    }


                </View>

                <View style={{ flex: 1, marginTop: hp('4%') }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('2%'), padding: 10 }}>


                <Text onPress={() => navigation.navigate("HomeScreen")} style={{ color: 'blue', fontSize: 20, marginLeft: wp('2%') }}>Sign Out</Text>

            </TouchableOpacity>


        </View>

    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    imagehead: {
        height: hp('12%'),
        width: wp('18%'),
        borderRadius: 32,
        marginLeft: wp('5%')



    },
    texta: {
        fontSize: 18,
        fontFamily:Fonts.POPPINS_REGULAR
        


    },
    textb: {
        fontSize: 15,
        fontFamily:Fonts.POPPINS_REGULAR
        


    },
    image1:{
        height:hp('8%'),
        width:wp('18%')
    }

})