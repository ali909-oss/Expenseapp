import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import Categories from './Categories';
import AddCate from '../components/CategoryAdd';



const Stack = createStackNavigator();
const Catego = () => {
    return ( 
            
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        
         <Stack.Screen
           name="Categories"
           component={Categories}
         />
          <Stack.Screen
           name="AddCate"
           component={AddCate}
         />
             
           
        
           
     
   </Stack.Navigator>  
    )
}

export default Catego;
