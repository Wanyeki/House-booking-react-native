import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Main_screen from './components/main_screen';
import Items from './components/items';

export default function App() {
  return (
    <View >
      {/* <Home/> */}
      {/* <Main_screen/> */}
      <Items/>
    </View>
  );
}

const styles = StyleSheet.create({

});
