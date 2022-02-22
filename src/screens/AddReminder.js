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
  import DateTimePickerModal from "react-native-modal-datetime-picker";

  import Ionicons from 'react-native-vector-icons/dist/Ionicons';

  const Data=[
    {
      name:'Monthly'

    },
    {
      name:'Daily'


    },
    {
      name:'Weekly'


    },
    {
      name:'Never'


    }
  ]

  const AddReminder = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);
    // Datepicker
    const [selectedDate, setselectedDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const handleDate = (date) => {
        setselectedDate(date.toDateString());
        hideDatePicker();
      };
      // timepicker
      const [selectedTime, setselectedTime] = useState("");
      const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
      const showTimePicker = () => {
        setTimePickerVisibility(true);
        };
      
        const hideTimePicker = () => {
          setTimePickerVisibility(false);
        };
        const handleTime = (time) => {
          setselectedTime(time.toTimeString());
          hideTimePicker();
        };
    return (
      
      
  
        <View style={styles.container}>
  <View style={styles.view1}>
              <View style={{marginTop:hp('1%'),marginLeft:wp('4%')}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Reminder")}>
             <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
             </TouchableOpacity>
              <Text style={styles.text}>Add Reminder</Text>
              </View>
        </View>
        <View style={{marginTop:hp('1%'),padding:hp('2%')}}>
          <Text style={styles.texta}>Title</Text>
          <TextInput
                        placeholder=""
                        style={styles.input}
                        fontSize={20}


                    />
        </View>
        <View style={{marginTop:hp('-1%'),padding:hp('2%')}}>
          <Text style={styles.texta}>Time</Text>
          <View style={styles.input1}>
          <Text style={styles.caltext}>{selectedTime}</Text>

            <TouchableOpacity onPress={showTimePicker}>
            <Ionicons name="time-outline" size={30} color="black"
            style={styles.icon}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTime}
                onCancel={hideTimePicker}
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:hp('-1%'),padding:hp('2%')}}>
          <Text style={styles.texta}>Interval</Text>
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
                                    width: widthPercentageToDP('28%'),
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
                                            <View style={styles.back}>
                                              <Text style={styles.name , Status === item.name ? styles.tabactive:styles.name}>{item.name}</Text>
                                            </View>
                                        </View>
                                        
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    )}
            </View>
            </ScrollView>
          </View>
        <View style={{marginTop:hp('-1%'),padding:hp('2%')}}>
          <Text style={styles.texta}>Date</Text>
          <View style={styles.input1}>
          <Text style={styles.caltext}>{selectedDate}</Text>

            <TouchableOpacity onPress={showDatePicker}>
            <Ionicons name="calendar-sharp" size={30} color="black"
            style={styles.icon}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("Reminder")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>CREATE</Text>
            </View>
            </TouchableOpacity>
        </View>
        )}
export default AddReminder;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')

    },
    view1: {
        backgroundColor:Colors.Default_Color,
        height: hp('10%'),
       
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
    texta:{
      fontSize:22,
      fontFamily:Fonts.POPPINS_MEDIUM,
      marginLeft:wp('3%')
    },
    input: {
      borderWidth: 0.2,
      borderColor: '#ffffff',
      width: wp('90%'),
      height: hp('7%'),
      backgroundColor: '#ffffff',
      borderColor:Colors.Default_Color,
      borderWidth:2,
      marginLeft: wp('2%'),
      textAlign: 'left',
      marginTop:hp('1%'),
      


  },
  input1:{
    borderWidth: 0.2,
    borderColor: '#ffffff',
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: '#ffffff',
    
    marginLeft: wp('2%'),
    textAlign: 'left',
    marginTop:hp('1%'),
  },
icon:{
  justifyContent:'flex-end',
  marginLeft:wp('80%'),
  marginTop:hp('-3%')
},
back:{
  width:wp('25%'),
  height:hp('6%'),
  backgroundColor:'#fff',
  justifyContent:'center',
  alignItems:'center'
},
name:{
  fontSize:16,
  fontFamily:Fonts.POPPINS_REGULAR
},
cont:{
  borderColor:Colors.Default_Color,
  borderWidth:2,
  
},
tabactive:{
  color:Colors.Default_Color,
  fontSize:16,
  fontFamily:Fonts.POPPINS_REGULAR
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
caltext:{
  fontSize:16,
  color:'#8f8f8f',
  marginLeft:wp('3%'),
  marginTop:hp('1%')
},
})
