import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Colors } from '../contants';

const Data = [
  {
    name: 'Your next appointment',
    id: 1,
    details: 'Start at 3:00pm Todat',
  },
  {
    name: 'New Review',
    id: 2,
    details: 'Ravindu Dhanan',
  },
  
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
            <View style={{flexDirection:'row',marginTop:hp('3%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>Notification</Text>
            </View>
      </View>
      <View style={{marginTop: hp('2%')}}>
        <View style={{height: hp('70%'), marginTop: hp('2%')}}>
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
                   <Text style={styles.name} >{item.name} </Text> 
                   <Text style={styles.detail}>{item.details} </Text> 
                  </View>
                  <TouchableOpacity>
           <AntDesign style={styles.arrow} name={'doubleright'} size={20} color={'#9299b2'} />
           </TouchableOpacity>

                 
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Return To Home</Text>
            </View>
            </TouchableOpacity>
    </View>
  );
};
export default NotificationScreen;


const styles = StyleSheet.create({
  container: {
    height: hp('85%'),
    width: wp('100%'),
  },
  
  detail:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  name: {
    fontSize: 17,
    color:Colors.Default_Color,
    marginTop:hp('-1%')
  },
  text1:{
    margin:13
  },
  main: {
    height: hp('10%'),
    width: wp('90%'),
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: wp('5%'),
    padding: 5,
    marginBottom: hp('2%'),
  },

  view1: {
    backgroundColor:Colors.Default_Color,
    height: hp('12%'),
    borderBottomRightRadius: wp('3%'),
    borderBottomLeftRadius: wp('3%'),
  },
  img: {
    height: hp('5%'),
    width: wp('6%'),
    backgroundColor: 'white',
    marginLeft: wp('1%'),
  },
  text:{
    fontSize:25,
    color:'white',
    padding:5
},
  greater: {
    height: hp('5%'),
    width: wp('6%'),
    margin:18
  },
  arrow:{
      marginTop:hp('3%'),
      marginLeft:wp('5%'),
      padding:5
  },
  btn2:{
    width:wp('95%'),
    height:hp('6%'),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2,
    borderWidth:2,
    borderColor:'#1ba0a5',
    backgroundColor:'#1ba0a5',
    marginTop:hp('2%'),
    marginLeft:wp('3%')
  
  },
  btntexta:{
    fontSize:18,
    color:"#1ba0a5"
  },
  btntextb:{
    fontSize:18,
    color:"#fff"
  
  },
});
