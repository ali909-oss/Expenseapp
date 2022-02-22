import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {Colors, Images, Fonts} from '../contants';
import {Display} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PURE_WHITE}
        translucent
      />
      <Image source={require("../assets/images/storexonelogo.jpeg")}resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>Shiba Burn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PURE_WHITE,
  },
  image: {
    height: Display.setHeight(220),
    width: Display.setWidth(200),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
});

export default SplashScreen;
