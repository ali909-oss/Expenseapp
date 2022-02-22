import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pay from '../components/People/Pay'
import Lend from '../components/People/Lend'
import Borrow from '../components/People/Borrow'
import Receive from '../components/People/Receive'
import { Fonts } from "../contants";




const People = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();





    return (
        <View style={styles.container}>
            <View style={{flex:3}}>

                <Tab.Navigator

                    swipeEnabled={false}
                    tabBarIndicator={false}


                    tabBarOptions={{
                      
                        indicatorStyle: {
                            backgroundColor: 'transparent'
                         },



                        tabStyle: {
                            marginTop: hp('1%'),
                            height:hp('7%'),
                            
                        },
                        activeTintColor: 'black',
                        pressColor: '#fff',
                        labelStyle: { textTransform: "none", fontSize: 17, fontWeight: 'bold', borderColor: '#1ba0a5', borderWidth: 2, width: wp('22%'), height: hp('5%'), borderRadius: 7, padding: 5, fontFamily: Fonts.POPPINS_MEDIUM, backgroundColor: '#fff' },
                        style: { backgroundColor: '#f9f9f9',shadowOpacity: 0,
                        elevation: 0, },
                    }}>

                    <Tab.Screen name="Pay" component={Pay} 
                   
                    
                    />
                    <Tab.Screen name="Receive" component={Receive} />
                    <Tab.Screen name="Lend" component={Lend} />
                    <Tab.Screen name="Borrow" component={Borrow} />




                </Tab.Navigator>

            </View>








        </View>

    )
}
export default People;
const styles = StyleSheet.create({
    container: {
        height:hp('65%'),
        width:wp('100%'),
        marginTop:hp('8%')




    },
})