import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {Colors, Fonts} from '../contants';
import { TouchableOpacity } from "react-native-gesture-handler";
import Expense from "../components/Expense";
import Income from "../components/Income";
import Transfer from "../components/Transfer";
import People from "../components/People";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { height } from "styled-system";
const Tab = createMaterialTopTabNavigator();




const AddTransactions = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.texta}>Add Transaction</Text>
                </View>

                
                <View style={{flex:4}}>

            <Tab.Navigator

            swipeEnabled={false}
           
            
            tabBarOptions={{
                
                
        
        tabStyle: {
        marginTop:hp('1%'),
        },
        activeTintColor: '#1ba0a5',
        pressColor:'#1ba0a5',
        labelStyle: { textTransform: "none",fontSize: 17,fontWeight:'bold',borderColor:'#fff',borderWidth:1,width:wp('22%'),height:hp('5%'),borderRadius:10,padding:5,fontFamily:Fonts.POPPINS_MEDIUM,backgroundColor:'#fff'},
        style: { backgroundColor: '#1ba0a5' },
      }}>
        
        <Tab.Screen name="Expense" component={Expense} />
        <Tab.Screen name="Income" component={Income} />
        <Tab.Screen name="Transfer" component={Transfer} />
        <Tab.Screen name="People" component={People} />



        
      </Tab.Navigator>
      
      </View>
      
      
      
        </View>
    )
}
export default AddTransactions;
const styles=StyleSheet.create({
    container:{
        height:hp('98%'),
        width:wp('100%'),
        backgroundColor:'#f9f9f9'

    },
    top:{
        width:wp('100%'),
        height:hp('8%'),
       
        backgroundColor:Colors.Default_Color,
        
    },
    name:{
        fontSize:16,
        color:'#fff',
        fontFamily:Fonts.POPPINS_LIGHT

    },
    texta:{
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginTop:hp('1%')
        
    },
    items:{
        width:wp('22%'),
        height:hp('5%'),
        borderRadius:15,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
   
    
    input: {
        borderWidth: 0.2,
        borderColor: '#ffffff',
        width: wp('90%'),
        height: hp('8%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'center',
        marginTop:hp('5%')


    },
    cont:{
        backgroundColor:'#ffffff',
        borderColor:'#ffffff',
        borderRadius:15,
    
    },
    tabactive:{
        color:'#1ba0a5',
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    input: {
        borderWidth: 0.2,
        borderColor: '#ffffff',
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('24%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        borderRadius:5,
        textAlign: 'center',
        position:'absolute'


    },
})