import React,{ Component } from 'react';
import { StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { useState } from 'react';

export default class Piechart extends Component {
  render() {
    const widthAndHeight = 200
    const series = [100, 0, 0, 0, 0]
    const sliceColor = ['#d4faa5','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

    return (

      
        <View style={styles.container}>
          
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.6}
            coverFill={'#FFF'}
          />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});