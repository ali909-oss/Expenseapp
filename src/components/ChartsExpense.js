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
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AllAccounts from '../components/AllAccounts';
import SwitchSelector from "react-native-switch-selector";
import ExpenseChart from './ExpenseChart';
import IncomeChart from './IncomeChart';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { fontSize } from 'styled-system';

const Data = [
    { name: 'Expense' },
    { name: 'Income' },
];
const ChartsExpense = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    return (
        <View style={styles.con}>
            <View
                style={{
                    marginTop: hp('10%'),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: wp('80%'),
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginLeft: wp('5%'),

                    height: heightPercentageToDP('7%'),
                }}>
                {Data.map(data => {
                    return (
                        <View>
                            <TouchableOpacity
                                onPress={() => SetStatusfunc(data.name)}
                                style={[Status === data.name && styles.cont]}>

                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        marginBottom: 5
                                    }}>

                                    <Text style={{ textAlign: 'center', fontSize: 18 }}>{data.name}</Text>

                                </View>
                                {Status === "Expense" ? <ExpenseChart /> : <IncomeChart />}




                            </TouchableOpacity>







                        </View>




                    );




                }


                )


                }

            </View>




        </View>

    )
}
export default ChartsExpense;
const styles = StyleSheet.create({
    con:{
        width:wp('100%'),

    },
    cont: {
        backgroundColor: Colors.Default_Color,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: Colors.Default_Color,
        height: heightPercentageToDP('7%'),
        width: widthPercentageToDP('50%'),
    },
})


