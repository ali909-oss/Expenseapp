import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import {Colors, Fonts} from '../contants';
import { TouchableOpacity } from "react-native-gesture-handler";
import Expense from "../components/Expense";
import Income from "../components/Income";
import Transfer from "../components/Transfer";
import People from "../components/People";

const Data=[
    {
        id:'1',
         name:'Expense'
    },
    {
        id:'2',
        name:'Income'

    },
    {
        id:'3',
        name:'Transfer'

    },
    {
        id:'4',
        name:'People'

    },
]

const AddTransaction = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }

    function Nestedifelse(value){
        if(value === "Expense"){
          return(
              <Expense/>
          )
        }
        else if(value === "Income"){
          return(
              <Income/>
          )
          
        }
        else if(value === "Transfer"){
          return(
          <Transfer/>
          )
        }
        else if(value === "People"){
            return(
            <People/>
            )
          }
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.texta}>Add Transaction</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('2%')}}>
                {
                    Data.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => { SetStatusfunc(item.name) }}>
                                <View
                                    style={[
                                        Status === item.name ? styles.cont : styles.abc,
                                    ]}>
                            <View style={styles.items}>
                                
                                <Text style={styles.name , Status === item.name ? styles.tabactive:styles.name}>{item.name}</Text>
                            </View>
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
                <TextInput
                        placeholder="PKR 0"
                        style={styles.input}
                        fontSize={20}


                    />
            </View>
            <View style={{flex:2}}>
                <Text>abc</Text>
            </View>
        </View>
    )
}
export default AddTransaction;
const styles=StyleSheet.create({
    container:{
        height:hp('85%'),
        width:wp('100%')

    },
    top:{
        width:wp('100%'),
        height:hp('30%'),
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:Colors.Default_Color,
        flex:1
    },
    name:{
        fontSize:16,
        color:'#fff',
        fontFamily:Fonts.POPPINS_LIGHT

    },
    texta:{
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginTop:hp('10%')
        
    },
    items:{
        width:wp('22%'),
        height:hp('5%'),
        borderRadius:15,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
   
    
    input: {
        borderWidth: 0.2,
        borderColor: '#ffffff',
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('2%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'center'


    },
    cont:{
        backgroundColor:'#ffffff',
        borderColor:'#ffffff',
        borderRadius:15,
    
    },
    tabactive:{
        color:'#1ba0a5',
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM
    }
})