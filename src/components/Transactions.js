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

const Data = [
    {
        id: '1',
        title: 'Grocery',
        account: 'ALi',
        price: '-500',
        date: '09 Feb,Wed',
        image: require("../assets/images/down1.png"),


    },
    {
        id: '2',
        title: 'Transfer',
        account: 'ALi to Bilal',
        price: '1000',
        date: '09 Feb,Wed',
        image: require("../assets/images/down2.png"),


    },
    {
        id: '3',
        title: 'Personal',
        account: 'ALi',
        price: '500',
        date: '09 Feb,Wed',
        image: require("../assets/images/down3.png"),


    }
]

const seprator=()=>{
    return (
    <View style={{height:1,backgroundColor:'#f1f1f1'}}/>
    )
}

const Transactions = () => {


    return (
        <View style={styles.main}>
            <FlatList
                nestedScrollEnabled={true}


                data={Data}
                keyExtractor={(item) => { item.id }}
                ItemSeparatorComponent={seprator}
                renderItem={({ item }) => {
                    return (
                        <View style={{marginBottom:hp('3%'),padding:4}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Image style={styles.image} source={item.image} />
                            <View style={{flexDirection:'column',marginLeft:wp('-15%')}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text>{item.account}</Text>

                            </View>
                            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                            <Text style={styles.price ,item.price >= 0 ? styles.green : styles.red}>{item.price}</Text>

                                <Text style={styles.date}>{item.date}</Text>
                            </View>

                        </View>
                        </View>
                    )
                }
                }
            />
        </View>
    )
}
export default Transactions;
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        width: wp('92%'),
        padding: 5,
        borderRadius:5
    },
    image:{
        width:wp('12%'),
        height:hp('6%'),
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
        color:'#9b9b9b',

    }



})