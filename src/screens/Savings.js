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
import { flexDirection } from "styled-system";
import Saving from "../components/Savings";

const Data=[
    {
        id:'1',
        pkr:'0',
        total_amount:'2,500',
        remaining:'1400',
        progress:'0.3'
    }
]


const Savings = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texta}>Saving Goals</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.textb}>Total Savings</Text>
                {Data.map((data)=>{
                    return(
                        <View>
                        <View style={{flexDirection:'row',padding:2}}>
                            <Text style={styles.pkr}>PKR {data.pkr}</Text>
                            <Text style={styles.total_amount}>/{data.total_amount}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:18,color:'#9b9b9b'}}>Remaining Amount : </Text>
                        <Text style={styles.remaining}>{data.remaining}</Text>
                        </View>
                        <ProgressBar style={{ marginTop: hp('1%'), marginLeft: wp('2%'), justifyContent: 'center' }} progress={data.progress}unfilledColor={'#D3D3D3'} width={wp('80%')} height={hp('1.5%')} color={'#1ba0a5'} borderWidth={0.1} borderColor={'black'} />

                        </View>
                    )
                })
            }
            </View>
            <View style={{marginTop:hp('3%')}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text style={styles.Transaction}>Your Saving Goals</Text>
        <TouchableOpacity>
        <View style={styles.back}>
          <Text style={{fontSize:16,color:'#fff'}}>CREATE</Text>
        </View>
        </TouchableOpacity>

        </View>
        <Saving/>
     
      </View>
           
        </View>
    )
}
export default Savings;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('95%')
    },
    header:{
        width:wp('100%'),
        height:hp('15%'),
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:'#1ba0a5'
    },
    texta:{
        fontSize:22,
        fontFamily:Fonts.POPPINS_REGULAR,
        marginTop:hp('1%'),
        color:'#fff',
        textAlign:'center'
    },
    main:{
        width:wp('92%'),
        height:hp('23%'),
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:1,
        marginLeft:wp('5%'),
        marginTop:hp('-5%'),
        padding:5
    },
    textb:{
        fontSize:22,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'black',
        padding:5
    
    },
    pkr:{
        fontSize:20,
        color:"#1ba0a5",
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    total_amount:{
        fontSize:18,
        color:'black',
        fontFamily:Fonts.POPPINS_REGULAR
    },
    remaining:{
        fontSize:18,
        color:'black',
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    Transaction:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:5
      },
      back:{
        width:wp('20%'),
        height:hp('5%'),
        borderRadius:20,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      }
 



})