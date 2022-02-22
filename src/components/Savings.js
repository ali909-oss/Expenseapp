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
import Entypo from "react-native-vector-icons/dist/Entypo";

 
const Data = [
    {
        id: '1',
        title: 'Home',
        date: '10 Feb 2022',
        progress: '0.5',

        price: '0',
        remaning: '1,000',
        percent:'5%',
        image: require("../assets/images/down1.png"),


    },
    {
        id: '2',
        title: 'Food & Drink',
        date: '11 Feb 2022',
        progress: '0.2',
        price: '0',
        remaning: '500',
        percent:'2%',


        image: require("../assets/images/down1.png"),


    },
    
]



const Saving = () => {


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
                            <View style={{flexDirection:'column',marginLeft:wp('-2%')}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.left}>Target Date : {item.date}</Text>

                            </View>
                            <TouchableOpacity>
                            <Entypo name="dots-three-vertical" color="#9b9b9b" size={18}/>
                            </TouchableOpacity>
                            

                        </View>
                        <View style={{flexDirection:'row',padding:3}}>
                            <Text style={styles.price}>Saved : </Text>
                            <Text style={styles.price}>PKR {item.price}/</Text>

                                <Text style={styles.date}>{item.remaning}</Text>
                                <Text style={styles.percent}>{item.percent}</Text>

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
export default Saving;
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        width: wp('92%'),
        padding: 5,
        borderRadius:5,
        marginBottom:hp('2%'),
        marginLeft:wp('4%'),
        elevation:1,

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
        color:'#9b9b9b',
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    left:{
        fontSize:15,
        color:"#9b9b9b",
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    price:{
        color:'black',
        fontSize:17,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    percent:{
        fontSize:17,
        color:"#1ba0a5",
        justifyContent:'flex-end',
        fontFamily:Fonts.POPPINS_MEDIUM,
        marginLeft:wp('35%')
    }



})