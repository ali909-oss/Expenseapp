import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Piechart from '../components/PieChart'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen'; import { Fonts } from "../contants";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Monthly } from "../contants/MoneyData/Monthly";
import MoneyItems from "../components/MoneyItems";

const Money = () => {
    const Tab = createMaterialTopTabNavigator();



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texta}>Money</Text>
            </View>
            <View style={{flex:5}}>

            <Tab.Navigator
            tabBarScrollEnabled={true}
            tabBarIndicator={false}
            

            screenOptions={{tabBarScrollEnabled: true}}
            
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: 'transparent'
                 },
                
                
                
                
        
        tabStyle: {
        marginTop:hp('1%'),
        width:widthPercentageToDP('25%')
        },
        activeTintColor: '#fff',
        pressColor:'#1ba0a5',
        labelStyle: { fontSize: 16,fontWeight:'bold',width:wp('52%'),height:hp('5%'),fontFamily:Fonts.POPPINS_MEDIUM},
        style: { backgroundColor: '#1ba0a5' ,
    },
      }}>
        {Monthly.map((data)=>{
                    return(
        <Tab.Screen name={data.name} component={MoneyItems} />
                    )
        })
    }
       



        
      </Tab.Navigator>
      
      </View>
           
           
        </View>
    )
}
export default Money;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')
    },
    header:{
        width:wp('100%'),
        height:hp('5%'),
      
        backgroundColor:'#1ba0a5',
    },
    texta:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_REGULAR,
        marginTop:hp('1%'),
        color:'#fff',
        textAlign:'center'
    },
   


})