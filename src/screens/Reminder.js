import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    updateSecureTextEntry,
    FlatList,
    ScrollView
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
  import Calend from '../components/Calendar';


const Remind=[
    {
        day:'18',
        month:'Feb',
        Year:'2022',
        title:'Book Ticket',
        duration:'Daily',
        time:'05:55 pm'


    },
    
]

  const Reminder = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);
    return (
      
      
  
        <View style={styles.container}>
  <View style={styles.view1}>
              <View style={{marginTop:hp('1%'),marginLeft:wp('4%')}}>
            <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
             <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
             </TouchableOpacity>
              <Text style={styles.text}>Add Reminder</Text>
              </View>
        
            </View>
            <Calend/>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('2%'),padding:wp('3%')}}>
                <Text style={{fontSize:18,fontFamily:Fonts.POPPINS_REGULAR}}>My Reminder</Text>
               <TouchableOpacity onPress={()=> navigation.navigate("AddReminder")}>
               <View style={styles.textback}>
                <Text style={styles.texta}>Add</Text>
                </View>
                </TouchableOpacity>
            </View>
            {
               Remind.map ((item,index) =>{
                    return(
                        <View style={styles.main}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:wp('-5%')}}>
                            <View style={styles.back}>
                                <Text style={{fontSize:16}}>{item.day}</Text>
                                <Text style={{fontSize:16}}>{item.month}</Text>
                                <Text style={{fontSize:16}}>{item.Year}</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{fontSize:18,fontFamily:Fonts.POPPINS_SEMI_BOLD}}>{item.title}</Text>
                                    <Text style={{fontSize:16,fontFamily:Fonts.POPPINS_REGULAR}}>{item.duration}</Text>
                                </View>
                                <Text style={{fontSize:16,fontFamily:Fonts.POPPINS_REGULAR,padding:4}}>{item.time}</Text>
                            </View>

                        </View>
                    )
                    }
                    )}
                
            </View>
    )}
export default Reminder;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')

    },
    view1: {
        backgroundColor:Colors.Default_Color,
        height: hp('15%'),
       
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
    textback:{
        height:hp('5%'),
        width:wp('18%'),
        backgroundColor:Colors.Default_Color,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    texta:{
        fontSize:16,
        color:'#fff',
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    main:{
        height:hp('10%'),
        width:wp('100%'),
        backgroundColor:'#fff',
        justifyContent:'center',
        padding:hp('3%')
    },
    date:{
        transform: [{ rotate: '90deg' }]

    },
    back:{
        flexDirection:'column',
        height:hp('10%'),
        width:wp('15%'),
        backgroundColor:'lightgreen',
        justifyContent:'center',
        alignItems:'center'
    }
})
            