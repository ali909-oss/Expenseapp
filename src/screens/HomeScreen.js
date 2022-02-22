import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  updateSecureTextEntry,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import React, { useState } from 'react';
import {Colors, Fonts} from '../contants';
import MonthlyExpense from '../components/MonthlyExpense';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import Transactions from '../components/Transactions';
import { ScrollView } from 'react-native-gesture-handler';
import Budget from '../components/Budget';

const HomeScreen = () => {
  const[Amount,setAmount] = useState("0")
  const navigation = useNavigation();

  return (
    

    <View style={styles.container}>
       
     
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>

        <Image source={require("../assets/images/menu3.png")} style = {styles.menu}/>
        </TouchableOpacity>
        <Text style={styles.texta}>Company Name</Text>


                </View>
                </View>
                <ScrollView 
     showsVerticalScrollIndicator={false}
     nestedScrollEnabled={true}
     >
            
    
      <View style={styles.Firstcardholder}>

        <View style={styles.Firstcard}>
          <View style={styles.Firstcardrow}>
            <Text style={styles.Whattext}>
            What You Have</Text>
            <TouchableOpacity>
            <Text style={styles.Allacountstext}> All Accounts </Text></TouchableOpacity>
            
             
          </View>
          <View style = {styles.Spacetask}>
              
          <Text style = {styles.Amounttext}>PKR {Amount}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Addaccount")} style = {{
    marginTop: 10,borderWidth:1,width:widthPercentageToDP("20%"),height:heightPercentageToDP("5%"),justifyContent:'center',alignItems:'center',borderRadius:10,paddingVertical:20,paddingHorizontal:20,marginTop:heightPercentageToDP("5%")}}>
            <Image source={require("../assets/images/plusicon.png")} style = {{width:25,height:25}}/>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>
    
      <View style={{marginTop:hp('2%')}}>
      <MonthlyExpense/>
      </View>
      <View style={{marginLeft:wp('4%'),marginTop:hp('2%')}}>
        <Text style={styles.Transaction}>Recent Transactions</Text>
        <Transactions/>
      </View>
      <View style={{marginTop:hp('3%')}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text style={styles.Transaction}>Your Budget</Text>
        <TouchableOpacity>
        <View style={styles.back}>
          <Text style={{fontSize:16,color:'#fff'}}>CREATE</Text>
        </View>
        </TouchableOpacity>

        </View>
        <Budget/>
     
      </View>
      </ScrollView>
      

    </View>

  );
};

const styles = StyleSheet.create({
  container: { 
    width:wp('100%'),
    height:hp('90%')
   
  },
  header:{
    width:wp('100%'),
    height:hp('10%'),
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    backgroundColor:'#1ba0a5',
  
},
texta:{
    fontSize:20,
    fontFamily:Fonts.POPPINS_REGULAR,
    marginTop:hp('2%'),
    color:'#fff',
    textAlign:'center',
    marginLeft:wp('20%')
},
  Backview: {
    height: heightPercentageToDP('25%'),
    backgroundColor: 'green',
  },
  mainimage: {
    width: widthPercentageToDP('100%'),
    flex: 1,
  },
  Firstcardholder: {
    left: widthPercentageToDP('5%'),
    marginTop: heightPercentageToDP('2%'),
     
  },
  Firstcard: {
    width: widthPercentageToDP('90%'),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  Whattext: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    paddingHorizontal: 20,
    marginTop: 10,
    color: 'grey',
     
  },
  Allacountstext: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    paddingHorizontal: 20,
    marginTop: 12,
    color: '#c3bdb7',
  },
  Firstcardrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Spacetask:{
   height:heightPercentageToDP("20%"),
   paddingHorizontal:20
  },
  Amounttext:{
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD, 
    marginTop: 10,
    color:Colors.DEFAULT_Maintheme
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
  },
  menu:{
    width:wp('7%'),
    height:hp('3.5%'),
    marginTop:hp('2%'),
    marginLeft:wp('3%')
    
  }
});
export default HomeScreen;
