import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import  HomeScreen  from '../screens/HomeScreen';
import Addaccount from '../components/Addaccount';



const Stack = createStackNavigator();
const HomeStack = () => {
    return ( 
            
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        
         <Stack.Screen
           name="HomeScreen"
           component={HomeScreen}
         />
          <Stack.Screen
           name="Addaccount"
           component={Addaccount}
         />
             
           
        
           
     
   </Stack.Navigator>  
    )
}

export default HomeStack;
