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
  import Ionicons from 'react-native-vector-icons/dist/Ionicons';
  import AllAccounts from '../components/AllAccounts';


  const Accounts = () => {
    const navigation = useNavigation();
    const[Amount,setAmount] = useState("2,000")

  
    return (
      
  
      <View style={styles.container}>
<View style={styles.view1}>
            <View style={{marginTop:hp('1%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>All Accounts</Text>
            </View>
      
          </View>

          <View style={styles.main}>
              <View style={{flexDirection:'row'}}>
                  <Text style={styles.texta}>All Accounts</Text>
                  <View style={{flexDirection:'column',marginLeft:wp('10%')}}>
                      <Text style={styles.textb}>What you Have</Text>
                      <Text style = {styles.Amounttext}>PKR {Amount}</Text>

                  </View>

              </View>
              
          </View>
          <AllAccounts/>
          </View>
    )
  }
export default Accounts;
  const styles = StyleSheet.create({
    container: { 
      width:wp('100%'),
      height:hp('98%')
     
    },
    view1: {
        backgroundColor:Colors.Default_Color,
        height: hp('12%'),
        borderBottomRightRadius: wp('3%'),
        borderBottomLeftRadius: wp('3%'),
      },
      text:{
        fontSize:22,
        color:'white',
        marginTop:hp('-5.5%'),
    
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    arrow:{
        padding:5
    },
    main:{
        height:hp('18%'),
        width:wp('90%'),
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:2,
        marginLeft:wp('5%'),
        marginTop:hp('-2%'),
        padding:wp('8%')
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_REGULAR
    },
    textb:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:'grey'
    },
    Amounttext:{
        fontSize:28,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.Default_Color
    }
    
  
    
})