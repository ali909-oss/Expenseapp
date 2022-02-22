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
import AllAccounts from '../components/AllAccounts';

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
  {
      image: require("../assets/images/down3.png"),
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

const IncomeCat = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState([]);
      const selectItem = (index) => {
      if(selectedIndex.indexOf(index)>-1){
         let newArray = selectedIndex.filter((indexObject)=>{
           if(indexObject == index){
               return false;
           }
           return true;
       })
       setSelectedIndex(newArray);
      }else{
       setSelectedIndex([
           ...selectedIndex,index
         ]);
      }
   
     };



  return (
    
<View>
      <View style={{marginTop:hp('-1%'),height:hp('60%')}}>
      <FlatList
        data={Data}
        extraData={selectedIndex}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item,index}) => {
          return (
            <View style={styles.main}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View  style={styles.text1}>
              <Image source={item.image} style={styles.image1} />

               <Text style={styles.title}>{item.title} </Text> 
              </View>
              <TouchableOpacity onPress = {()=> selectItem(index)}>
      <Ionicons
        name={selectedIndex.indexOf(index)>-1 ? 'eye' : 'eye-off'}
        size={25}
        color="#1ba0a5"
        style={styles.icon}
      />
    </TouchableOpacity>

             
              </View>
            </View>
          );
        }}
      />

 </View>
 <View style={{marginTop:hp('2%')}}>
 <Text style={styles.texta}>Not in the list? Create custom category</Text>
 <TouchableOpacity onPress={()=> navigation.navigate("AddCate")}>
 <View style={styles.btn2}>
              <Text style={styles.btntextb}>ADD CATEGORY</Text>
          </View>
          </TouchableOpacity>
          </View>
 </View>
  )
}
export default IncomeCat;
const styles = StyleSheet.create({
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
  icon:{
      padding:hp('2%'),
      
  },
  texta:{
      padding:10,
      textAlign:'center',
      fontSize:15
  },
  btn2:{
      width:wp('90%'),
      height:hp('7.5%'),
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