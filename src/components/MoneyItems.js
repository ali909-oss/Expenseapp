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
  import TopCard from '../components/TopCard';
  import Transactions from '../components/Transactions';
import { ScrollView } from 'react-native-gesture-handler';


  const Data=[
      {
          name:'History',
          image: require("../assets/images/history.png"),
          page:'History'


      },
      {
          name:'Budget',
          image: require("../assets/images/budget.png"),
          page:'Budget'



      },
      {
          name:'ATM',
          image: require("../assets/images/atm-card.png"),
          page:'Atm'



      },
      {
          name:'Events',
          image: require("../assets/images/calen.png"),
          page:'Events'



      }
  ]

  const MoneyItems = () =>{
    const navigation = useNavigation();
      return(
          
        <View style={styles.container}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            >
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <TopCard/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('2%')}}>
            {Data.map(data => (
               
               <View
                 style={{
                  
                     justifyContent: 'center',
                     alignItems: 'center',
                     marginTop:hp('5%'),
                     width: widthPercentageToDP('22%'),
                     height:hp('4%'),
                     borderRadius: 10, 
                     marginBottom:15
                                     
                 }}>
                 <TouchableOpacity onPress={() => navigation.navigate(data.page)}>
                   <View
                     style={{justifyContent: 'center', alignItems: 'center'}}>
                     <View
                     style={styles.back}
                      >
                       <Image source={data.image} style={styles.image1} />
                     </View>
                     <Text
                       style={{
                         fontSize: 16,
                         color: 'black',
                         textAlign: 'center',
                         marginTop: 10,
                         marginBottom: 10,
                         fontFamily:Fonts.POPPINS_MEDIUM
                       }}>
                       {data.name}
                     </Text>
                   </View>
                 </TouchableOpacity>
               </View>
             ))}
             </View>
             <View style={{marginTop:hp('6%')}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('5%')}}>
                     <Text style={styles.texta}>Transactions</Text>
                     <TouchableOpacity>
                     <Text style={styles.textb}>View All</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={{marginLeft:wp('4%')}}>
                 <Transactions/>
                 </View>

             </View>
             </ScrollView>
       
      </View>
      )
  }
  export default MoneyItems;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
    },
    image1:{
        width:wp('9%'),
        height:hp('4.5%')
    },
    back:{
        width:wp('16%'),
        height:hp('8%'),
        borderRadius:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        elevation:2
    },
    texta:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,

    },
    textb:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color: '#c3bdb7',
    }
  
})