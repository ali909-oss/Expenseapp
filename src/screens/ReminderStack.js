import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import Reminder from './Reminder';
import AddReminder from './AddReminder';



const Stack = createStackNavigator();
const Remind = () => {
    return ( 
            
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        
         <Stack.Screen
           name="Reminder"
           component={Reminder}
         />
          <Stack.Screen
           name="AddReminder"
           component={AddReminder}
         />
             
           
        
           
     
   </Stack.Navigator>  
    )
}

export default Remind;
