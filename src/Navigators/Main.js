import React from 'react';
import Login from "@/Containers/Login/Login";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>


  )
}



export default MainNavigator
