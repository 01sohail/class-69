import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {CreateBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TransactionScreen from "../screens/transaction";
import SearchScreen from "../screens/search";

const Tab = CreateBottomTabNavigator();
export default class BottomTabNavigator extends Component{
render(){
return(
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name = "Transaction" component = {TransactionScreen} />
<Tab.Screen name = "Search" component = {SearchScreen} />

</Tab.Navigator>

</NavigationContainer>    
);


}




}



 