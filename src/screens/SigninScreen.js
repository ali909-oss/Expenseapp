import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors, Fonts, Images} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Separator} from '../components';
import {Display} from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import {AuthenicationService} from '../services';
import LottieView from 'lottie-react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Data} from '../Data';
import {Heading} from '../Data';
import {DOB} from '../Data';
import Helpuscalander from '../components/Helpuscalander';
import {useNavigation} from '@react-navigation/native';
const SigninScreen = () => {
  const navigation = useNavigation();
  const Filtertags = [
    {id: 1, name: 'Male', image: require('../assets/images/male.png')},
    {id: 2, name: 'Female', image: require('../assets/images/female.png')},
  ];

  const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  }

  return (
    <View style={styles.container}>
      <View style={styles.Headholder}>
        <Text style={styles.Headingtext}>Help Us Know You</Text>
      </View>
      <View style={styles.inputholder}>
        <Text style={styles.inputtext}>Name</Text>
        <TextInput placeholder="Enter Your Name" style={styles.Textinput} />
      </View>
      <View style={styles.Dateofbirth}>
        <Text style={styles.DOB}>What is your date of Birth ? </Text>
        <Helpuscalander />
      </View>
      <View style={styles.inputholder}>
        <Text style={styles.DOB}>what is your Gender?</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {Filtertags.map(data => (
          <View
            style={{
              width: widthPercentageToDP('25%'),
              borderRadius: 10,
              padding: 8,
              borderColor: 'black',
              marginLeft: widthPercentageToDP('5%'),
              marginTop: heightPercentageToDP('.5%'),
              height: heightPercentageToDP('15%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => SetStatusfunc(data.name)}
              style={[Status === data.name && styles.cont]}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontFamily: Fonts.POPPINS_REGULAR,
                    color: 'black',
                  }}>
                  {data.name}
                </Text>
                <Image
                  source={data.image}
                  style={{width: 20, height: 20, marginLeft: 10}}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{
            marginTop: heightPercentageToDP('15%'),
            backgroundColor: Colors.DEFAULT_Maintheme,
            width: widthPercentageToDP('95%'),
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.POPPINS_REGULAR,
              color: 'white',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_Helpus,
  },
  Headholder: {
    marginTop: heightPercentageToDP('7%'),
    paddingHorizontal: 10,
  },
  Headingtext: {
    fontSize: 22,
    color: Colors.DEFAULT_Headingtext,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  inputholder: {
    flexDirection: 'column',
    paddingHorizontal: 12,
    marginTop: heightPercentageToDP('3%'),
  },
  inputtext: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  Textinput: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: heightPercentageToDP('2%'),
    paddingHorizontal: 15,
    borderColor: Colors.DEFAULT_Maintheme,
  },
  Dateofbirth: {
    flexDirection: 'column',
    paddingHorizontal: 12,
    marginTop: heightPercentageToDP('3%'),
  },
  DOB: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  cont: {
    padding: 5,
    borderWidth: 2,
    borderColor: Colors.DEFAULT_Maintheme,
    borderRadius: 5,
    width: widthPercentageToDP('25%'),

    height: heightPercentageToDP('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SigninScreen;
