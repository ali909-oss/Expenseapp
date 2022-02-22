import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Fonts } from "../contants";
import AntDesign from "react-native-vector-icons/dist/AntDesign";

const Data = [
    {
        name: 'Personal',
        id: '1',
        image: require("../assets/images/down3.png"),
    },
    {
        name: 'Food & Drink',
        id: '2',
        image: require("../assets/images/food.jpg"),
    },
    {
        name: 'Travel',
        id: '3',
        image: require("../assets/images/planer.png"),
    },
    {
        name: 'Medical',
        id: '4',
        image: require("../assets/images/medical.png"),
    },
    {
        name: 'Transport',
        id: '5',
        image: require("../assets/images/deliver.png"),
    },
    {
        name: 'Education',
        id: '6',
        image: require("../assets/images/education.png"),
    },
    
]

const Account=[
    {
        id:"1",
         name:"Zarai Bank",
         image: require("../assets/images/bank.png"),

    },
    {
        id:"2",
         name:"Cash",
         image: require("../assets/images/cashp.png"),


    },
    
    {
        id:'5',
        image: require("../assets/images/plus.png"),
        name:'Add Account'
    }
]
const Income = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);

    return (
        <View style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={{ marginTop: hp('8%') }}>
            <Text style={styles.texta}>Select Category</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    Data.map((item, index) => {
                        return (
                            <View
                                style={{

                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: hp('2%'),
                                    width: widthPercentageToDP('25%'),
                                    height: hp('10%'),
                                    borderRadius: 10,
                                    marginBottom: 15,


                                }}>
                                <TouchableOpacity onPress={() => { SetStatusfunc(item.name) }}>
                                    <View
                                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View
                                            style={[
                                                Status === item.name ? styles.cont : styles.mainview,
                                            ]}>
                                            <View style={styles.backimg}>
                                                <Image source={item.image} style={styles.image1} />
                                            </View>
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'black',
                                                textAlign: 'center',
                                                marginBottom: 5,
                                            }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    )}
            </View>
            </ScrollView>
            <View style={{ marginTop: hp('3%') }}>
                <Text style={styles.texta}>Select Account</Text>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    Account.map((item, index) => {
                        return (
                            <View
                                style={{

                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: hp('2%'),
                                    width: widthPercentageToDP('25%'),
                                    height: hp('10%'),
                                    borderRadius: 10,
                                    marginBottom: 15,


                                }}>
                                <TouchableOpacity onPress={() => { SetStatusfunc(item.name) }}>
                                    <View
                                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View
                                            style={[
                                                Status === item.name ? styles.cont : styles.mainview,
                                            ]}>
                                            <View style={styles.backimg}>
                                                <Image source={item.image} style={styles.image1} />
                                            </View>
                                            
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'black',
                                                textAlign: 'center',
                                                marginBottom: 5,
                                            }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                               
                               
                            </View>
                             
                        )}
                    )}
            </View>
            </ScrollView>

            </View>
            <View style={{marginTop:hp('2%')}}>
            <View style={styles.btn}>
                <Text style={styles.btntexta}>Add Details</Text>
            </View>
        </View>
        <View style={{marginTop:hp('2%')}}>
            <View style={styles.btn2}>
                <Text style={styles.btntextb}>Finish</Text>
            </View>
        </View>
            

          




        </View>
        </ScrollView>
        
        </View>
    )
}
export default Income;
const styles = StyleSheet.create({
  
    texta: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        padding: 5,
        marginLeft: wp('4%')
    },
    image1: {
        width: wp('12%'),
        height: hp('6%')
    },
    backimg: {
        width: wp('20%'),
        height: hp('10%'),
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cont: {
        borderColor: "#1ba0a5",
        borderWidth: 2,
        borderRadius: 50,


    },
    btn:{
        width:wp('90%'),
        height:hp('8%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:2,
        borderColor:'#1ba0a5',
        backgroundColor:'#fff',
        marginLeft:wp('5%')

    },
    btn2:{
        width:wp('90%'),
        height:hp('8%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:2,
        borderColor:'#1ba0a5',
        backgroundColor:'#1ba0a5',
        marginLeft:wp('5%')

    },
    btntexta:{
        fontSize:18,
        color:"#1ba0a5"
    },
    btntextb:{
        fontSize:18,
        color:"#fff"

    }

})