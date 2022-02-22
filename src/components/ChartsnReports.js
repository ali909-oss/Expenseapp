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
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import React, { useState } from 'react';
import { Colors, Fonts } from '../contants';
import TopCard from '../components/TopCard';
import Transactions from '../components/Transactions';
import { ScrollView } from 'react-native-gesture-handler';
import BarChart from './Barchart';
import ChartsExpense from './ChartsExpense';
const ChartsnReports = () => {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <View style={styles.main}>
            <Text style={styles.texta}>Income vs Expense</Text>

            <BarChart/>
            </View>
            <View>
<ChartsExpense/>            
</View>
        </View>
    )
}
export default ChartsnReports;
const styles = StyleSheet.create({
   
    container:{
        flex:1,
        height:hp('85%')

    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginTop:hp('2%'),
        color:'black',
        padding:wp('2%')
    },
    main:{
        backgroundColor:'#fff',
        height:hp('30%'),
        width:wp('100%'),
        borderRadius:10
    }
})