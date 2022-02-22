import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import Fire from 'react-native-vector-icons/SimpleLineIcons';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import News from 'react-native-vector-icons/Ionicons';
import Iconsetting from 'react-native-vector-icons/Feather';

import Icon01 from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

import {heightPercentageToDP} from 'react-native-responsive-screen';
import HomeStack from './HomeStack';
import AddCategory from '../screens/AddCategory'
import Savings from '../screens/Savings'
import Money from '../screens/Money'
import Insights from './Insights';

export default function Tab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          padding: 5,
          height: heightPercentageToDP('10%'),
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#1a71ff' : '',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="Money"
        component={Money}
        style={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Money
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="AddCategory"
        component={AddCategory}
        style={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/plus.png')}
                  style={{
                    height: 60,
                    width: 60,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                    top: -2,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                    top: -2,
                  }}>
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="Savings"
        component={Savings}
        style={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Savings
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="News"
        component={Insights}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../assets/images/black.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#1a71ff' : '#85899f',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#1a71ff' : '##85899f',
                    fontSize: 15,
                    marginBottom: 5,
                  }}>
                  Insights
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}
