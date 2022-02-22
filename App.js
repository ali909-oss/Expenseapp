import React  from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Appstack from './src/navigators/AppStack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createStackNavigator();







const App = () => {
    return (
        <NavigationContainer >
             <Appstack/>
        </NavigationContainer>
        
          
       
    )
}

export default App;