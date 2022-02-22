import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    updateSecureTextEntry,
    FlatList
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

  const Data=[
      {
        image: require("../assets/images/cashp.png"),
        title:'Cash',
        price:'0'


      },
      {
        image: require("../assets/images/cashp.png"),
        title:'Savings',
        price:'0'

      },
      {
        image: require("../assets/images/down3.png"),
        title:'Ali',
        price:'100'

      },
      {
        image: require("../assets/images/down3.png"),
        title:'Bilal',
        price:'-2000'

      },
      {
        image: require("../assets/images/bank.png"),
        title:'Meezan Bank',
        price:'500'

      },
      
  ]

  const AllAccounts = () => {
    const navigation = useNavigation();

  
    return (
      
  
     <View style={{marginTop:hp('2%'),height:hp('68%')}}>
          <FlatList
            data={Data}
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => {
              return (
                <View style={styles.main}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View  style={styles.text1}>
                  <Image source={item.image} style={styles.image1} />

                   <Text style={styles.title}>{item.title} </Text> 
                  </View>
                  <Text style={styles.price}>PKR {item.price} </Text> 

                 
                  </View>
                </View>
              );
            }}
          />

     </View>
    )
  }
export default AllAccounts;
  const styles = StyleSheet.create({
    container: { 
      width:wp('100%'),
      height:hp('98%')
     
    },
    image1:{
        height:hp('6%'),
        width:wp('15%'),
        marginTop:hp('1%')
    },
    main:{
        width:wp('95%'),
        height:hp('8%'),
        backgroundColor:"#fff",
        marginBottom:hp('1%'),
        marginLeft:wp('2%')

    },
    text1:{
        flexDirection:'row',
    },
    title:{
        padding:hp('2%'),
        fontSize:16,
        fontFamily:Fonts.POPPINS_REGULAR
    },
    price:{
        padding:hp('2%'),
        fontSize:16,
        fontFamily:Fonts.POPPINS_REGULAR
    }
  

   
    
  
    
})