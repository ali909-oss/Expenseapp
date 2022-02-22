import React from 'react';
import { width ,isLargeScreen, View,style,StyleSheet,Button, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons
from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import Octicons from 'react-native-vector-icons/dist/Octicons';
import { Savings } from '../screens';
import Tab from '../screens/Tabs';
import Accounts from '../screens/Accounts';
import Remind from '../screens/ReminderStack';
import Catego from '../screens/CategoryStack';
import NotificationScreen from '../screens/Notification';
const Drawer = createDrawerNavigator();


const Appstack = () => {
  return (
    

    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}
    drawerContentOptions={{
      activeTintColor: 'blue',
      activeBackgroundColor: '#ebf3f9',
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'white',
      labelStyle:{
        marginLeft:2,
        fontSize:17,
        
      }
    }}
    >
     <Drawer.Screen
        name = "Home"
        component={Tab}
        options={{
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
        <Drawer.Screen
        name = "Accounts"
        component={Accounts}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
            name="account-arrow-right"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
        <Drawer.Screen
        name = "Categories"
        component={Catego}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
            name="category"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
         <Drawer.Screen
        name = "Reminder"
        component={Remind}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
            name="reminder"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
        <Drawer.Screen
        name = "Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <FontAwesome
            name="bell"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
       
      
       
        
    </Drawer.Navigator>
    
    
  );
};

export default Appstack;

