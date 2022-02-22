import React ,{useState} from "react";
import { View ,Text,StyleSheet} from "react-native";
import Piechart from '../components/PieChart'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';import { Fonts } from "../contants";
import { TouchableOpacity } from "react-native-gesture-handler";
const MonthlyExpense=()=>{
    const[Percentage,setPercentage] = useState("100%")
    const[Amount,setAmount] = useState("2,000")


    return(
        <View style={styles.back}>
            <Text style={styles.texta}>Your Monthly Expense</Text>
            <View style={{marginTop:hp('2%')}}>
            <Piechart/>
            <Text style = {styles.Amounttext}>{Percentage}</Text>

            </View>
            <View style={{marginTop:hp('25%')}}>
            <Text style={styles.Amount}>This Month You Spent PKR {Amount}</Text>
           <TouchableOpacity>
            <Text style={styles.expense}>Expense Details</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default MonthlyExpense;
const styles=StyleSheet.create({
    back:{
        height:heightPercentageToDP('50%'),
        width:widthPercentageToDP('90%'),
        marginLeft:widthPercentageToDP('5%'),
        backgroundColor:'white',
        borderRadius: 10,
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginLeft:wp('5%'),
        padding:5

    },
    Amounttext:{
        fontSize:18,
        padding:5,
    },
    Amount:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        textAlign:'center'
    },
    expense:{
        fontSize:17,
        color:'#9b9b9b',
        fontFamily:Fonts.POPPINS_REGULAR,
        textAlign:'center',
        padding:4

    }

})