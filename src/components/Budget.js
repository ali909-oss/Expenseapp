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
import ProgressBar from 'react-native-progress/Bar';

const Data = [
    {
        id: '1',
        title: 'Grocery',
        left: '1000',
        progress: '0.5',

        price: '0',
        remaning: '1,000',
        image: require("../assets/images/down1.png"),


    },
    {
        id: '2',
        title: 'Food & Drink',
        left: '500',
        progress: '0.2',
        price: '0',
        remaning: '500',
        image: require("../assets/images/down1.png"),


    },
    
]



const Budget = () => {


    return (
        <View>
            <FlatList
                nestedScrollEnabled={true}


                data={Data}
                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.main}>

                        <View style={{padding:4}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Image style={styles.image} source={item.image} />
                            <View style={{flexDirection:'column',marginLeft:wp('-15%')}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.left}>Left : {item.left}</Text>

                            </View>
                            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                            <Text style={styles.price}>PKR {item.price}</Text>

                                <Text style={styles.date}>/{item.remaning}</Text>
                            </View>

                        </View>
                        <ProgressBar style={{ marginTop: hp('1%'), marginLeft: wp('2%'), justifyContent: 'center' }} progress={item.progress} unfilledColor={'#D3D3D3'}  width={wp('80%')} height={hp('1.5%')} color={'#1ba0a5'} borderWidth={0.1} borderColor={'black'} />

                        </View>
                        </View>
                    )
                }
                }
            />
        </View>
    )
}
export default Budget;
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        width: wp('90%'),
        padding: 5,
        borderRadius:5,
        marginBottom:hp('2%'),
        marginLeft:wp('5%')
    },
    image:{
        width:wp('10%'),
        height:hp('5.5%'),
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('-5%')
    },
    title:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    green:{
        color:"green",
        fontSize:16
    },
    red:{
        color:'red',
        fontSize:16
    },
    date:{
        fontSize:17,
        color:'black',
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    left:{
        fontSize:16
    },
    price:{
        color:'#1ba0a5',
        fontSize:17,
        fontFamily:Fonts.POPPINS_MEDIUM
    }



})