import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon , Image} from 'react-native-elements';

//screens
import Home from './components/home';
import Main_screen from './components/main_screen';
import Items from './components/items';

//drawer
import {createDrawerNavigator,DrawerItemList,DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer,DefaultTheme, DarkTheme} from '@react-navigation/native';
//tabs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//stack
import {createStackNavigator, StackView} from '@react-navigation/stack';

export default function App() {
 
  return (
    
    <NavigationContainer >
    <Drawer.Navigator initialRouteName="Home" drawerContent={Custom_items}>
      <Drawer.Screen name="Home" >
        {props=><Home {...props}/>}
      </Drawer.Screen>
      <Drawer.Screen name="Items">
        {props=><Items {...props}/>}
      </Drawer.Screen>
      <Drawer.Screen name="Show" component={Main_screen}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});




const Custom_items=(props)=>{
  return(
  
    <DrawerContentScrollView {...props}>
      <Image source={require('./assets/house2.jpg')} style={{width:'100%',height:100,marginBottom:10}}/>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  
  );
}
const Tabs=createBottomTabNavigator(); 
const Drawer= createDrawerNavigator();
const Stack=createStackNavigator();

