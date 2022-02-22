import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { View, StyleSheet,Text } from 'react-native';
import React from 'react';
import { style } from 'styled-system';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../contants';

const config = {
  hasYAxisBackgroundLines: false,
  xAxisLabelStyle: {
    rotation: 0,
    fontSize: 12,
    width: 70,
    yOffset: 4,
    xOffset: -15
  },
  yAxisLabelStyle: {
    rotation: 30,
    fontSize: 13,
    prefix: '$',
    position: 'top',
    xOffset: 10,
    decimals: 2,
    height: 90
  }
};

const BarChart = () => (
  <View style={{marginTop:hp('1%')}}>
    <HorizontalBarGraph
      data={[125, 100,]}
      labels={['In','Out'] }
      width={wp('100%')}
      height={hp('20%')}
      barRadius={5}
      barColor={Colors.Default_Color}
      baseConfig={config}
      style={styles.chart}
    />
  </View>
);
export default BarChart;

const styles = StyleSheet.create({
  chart: {
    padding: 15,
    paddingTop: hp('5%'),
    borderRadius: 20,
    width:wp('90%'),
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp('5%'),
    marginTop:hp('-15%')
  },
  
});