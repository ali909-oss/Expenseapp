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
  import SwitchSelector from "react-native-switch-selector";
  import ExpenseCat from '../components/ExpenseCat';
  import IncomeCat from '../components/IncomeCat';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


  const Data = [
    {id: 1, name: 'Expense'},
    {id: 2, name: 'income'},
  ];

  const Categories = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  }
  const Tab = createMaterialTopTabNavigator();


    // const options = [
    //   { label: "Expense", value: "Expense", },
    //   { label: "Income", value: "Income",}
    // ];

    // function Nestedifelse(value){
    //   if(value === "Expense"){
    //     return(
    //       <Expense/>
    //     )
    //   }
    //   else if(value === "Income"){
    //     return(<Income/>)
    //   }
    // }
  
    return (
      
      
  
      <View style={styles.container}>
<View style={styles.view1}>
            <View style={{marginTop:hp('1%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>Manage Categories</Text>
            </View>
      
          </View>
          <Tab.Navigator




tabBarOptions={{
 
    

                indicatorStyle: {
                    backgroundColor: 'transparent'
                 },
tabStyle: {
marginTop:hp('-1%')
},
activeTintColor: '#fff',

pressColor:'#fff',
labelStyle: { textTransform: "none",fontSize: 19,fontWeight:'bold',borderColor:'#1ba0a5',borderWidth:1,width:wp('30%'),height:hp('6%'),borderRadius:50,padding:8,fontFamily:Fonts.POPPINS_MEDIUM,backgroundColor:'#1ba0a5'},
style: { backgroundColor: '#f3f3f3',shadowOpacity: 0,
elevation: 0,width:wp('70%'),marginLeft:wp('15%') },
}}>

<Tab.Screen name="Expense" component={ExpenseCat} />
<Tab.Screen name="Income" component={IncomeCat} />





</Tab.Navigator>
         
        

         

          
          </View>
    )
  }
export default Categories;
  const styles = StyleSheet.create({
    container: { 
      width:wp('100%'),
      height:hp('98%'),
     
    },
    view1: {
        backgroundColor:Colors.Default_Color,
        height: hp('10%'),
        borderBottomRightRadius: wp('3%'),
        borderBottomLeftRadius: wp('3%'),
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
    
    
})