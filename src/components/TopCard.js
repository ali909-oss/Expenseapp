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

  const TopCard = () =>{
    const[Amount,setAmount] = useState("0")
    const navigation = useNavigation();
      return(
          
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
      )
  }
  export default TopCard;
const styles=StyleSheet.create({
    Firstcard: {
        width: widthPercentageToDP('90%'),
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'flex-start', 
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
      }
})