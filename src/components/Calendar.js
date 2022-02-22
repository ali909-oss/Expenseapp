import { View } from "native-base";
import React ,{useState} from "react";
import {Calendar} from 'react-native-calendars';
import { Colors, Fonts } from "../contants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';

const Calend =() =>{
    const [ markedDates, setMarkedDates ] = useState({});
    getSelectedDayEvents = date => {
        let markedDates = {};
        markedDates[date] = { selected: true, color: '#00B0BF', textColor: '#FFFFFF' };
        
    }
    return(
    <Calendar
    onDayPress={day => {
        console.log('selected day', day);
      }}
      markedDates={markedDates}
      onDayPress={day => {
        getSelectedDayEvents(day.dateString);
      }}
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      markedDates={   {     selected: true, marked: true,
      }}
    style={{borderWidth:1,borderColor:'grey',height:hp('45%'),width:wp('90%'),marginLeft:wp('5%'),marginTop:hp('-4%')}}
    theme={{
        backgroundColor:"#fff",
        calendarBackground:"#fff",
        textSectionTitleColor:Colors.Default_Color,
        selectedDayBackgroundColor:Colors.Default_Color,
        todayTextColor:Colors.Default_Color,
        dayTextColor:'black',
        selectedDotColor:Colors.Default_Color,
        arrowColor:'black',
        monthTextColor:'black',
        textDayFontFamily:Fonts.POPPINS_REGULAR,
        textDayFontSize:16,
        textMonthFontSize:16,
        textDayHeaderFontSize:16,
       
    }}
    />


    )
}
export default Calend;