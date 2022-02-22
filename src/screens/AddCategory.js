import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AddTransactions from "./AddTransactions";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
      name="AddTransaction" 
      component={AddTransactions} 
      options={{ headerShown:false}} 
     
      />
      
      
       
     
      
      
      
      

</Stack.Navigator>
  );
}

export default MyStack;