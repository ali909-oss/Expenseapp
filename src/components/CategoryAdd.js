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


  const Data = [
    
        {
            name: 'Personal',
            id: '1',
            image: require("../assets/images/down3.png"),
        },
        {
            name: 'Food & Drink',
            id: '2',
            image: require("../assets/images/food.jpg"),
        },
        {
            name: 'Travel',
            id: '3',
            image: require("../assets/images/planer.png"),
        },
        {
            name: 'Medical',
            id: '4',
            image: require("../assets/images/medical.png"),
        },
        {
            name: 'Transport',
            id: '5',
            image: require("../assets/images/deliver.png"),
        },
        {
            name: 'Education',
            id: '6',
            image: require("../assets/images/education.png"),
        },
        {
            id:"1",
             name:"Zarai Bank",
             image: require("../assets/images/bank.png"),
    
        },
        {
            id:"2",
             name:"Cash",
             image: require("../assets/images/cashp.png"),
    
    
        },
        {
            name: 'Food & Drink',
            id: '2',
            image: require("../assets/images/food.jpg"),
        },
        {
            name: 'Travel',
            id: '3',
            image: require("../assets/images/planer.png"),
        },
        {
            name: 'Medical',
            id: '4',
            image: require("../assets/images/medical.png"),
        },
        {
            name: 'Transport',
            id: '5',
            image: require("../assets/images/deliver.png"),
        },
        {
            name: 'Education',
            id: '6',
            image: require("../assets/images/education.png"),
        },
        {
            id:"2",
             name:"Cash",
             image: require("../assets/images/cashp.png"),
    
    
        },
        {
            name: 'Food & Drink',
            id: '2',
            image: require("../assets/images/food.jpg"),
        },
        
       
        
    
]


  const AddCate = () => {
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
            <TouchableOpacity onPress={()=> navigation.navigate("Categories")}>
             <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
             </TouchableOpacity>
              <Text style={styles.text}>Add Category</Text>
              </View>
        
            </View>
            <TextInput
                        placeholder="Category Name"
                        style={styles.input}
                        fontSize={20}
                        fontFamily={Fonts.POPPINS_REGULAR}


                    />
                    <View style={{marginTop:hp('2%')}}>
                        <Text style={styles.texta}>Linked To:</Text>
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        height={hp('55%')}
                        
                
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
                                    width: widthPercentageToDP('25%'),
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
                                            <View style={styles.backimg}>
                                                <Image source={item.image} style={styles.image1} />
                                            </View>
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'black',
                                                textAlign: 'center',
                                                marginBottom: 5,
                                            }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    )}
            </View>
            </ScrollView>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("Categories")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Create Category</Text>
            </View>
            </TouchableOpacity>
            </View>
    )}
export default AddCate;
    const styles = StyleSheet.create({
        container:{
            width:wp('100%'),
            height:hp('90%')

        },
        image1:{
            height:hp('6%'),
            width:wp('15%'),
            marginTop:hp('1%')
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
        input: {
            borderWidth: 0.2,
            borderColor: '#ffffff',
            width: wp('90%'),
            height: hp('9%'),
            backgroundColor: '#ffffff',
            marginLeft: wp('5%'),
            textAlign: 'center',
            marginTop:hp('-1%'),
            elevation:3
    
    
        },
        texta:{
            fontSize:16,
            fontFamily:Fonts.POPPINS_SEMI_BOLD,
            marginLeft:wp('3%')
        },
        image1: {
            width: wp('8%'),
            height: hp('4%')
        },
        backimg: {
            width: wp('15%'),
            height: hp('7.5%'),
            borderRadius: 50,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        cont: {
            borderColor: "#1ba0a5",
            borderWidth: 4,
            borderRadius: 50,
    
    
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
    
        }
    })
        