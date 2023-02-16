/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import Weather from "./Screens/Weather";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from "./Screens/NewsScreen";
import Article from "./Screens/Article"
import CurrencyConverter from "./Screens/CurrencyConverter";
import Cheatsheet from "./Screens/Cheatsheet";
import TodoScreen from "./Screens/todo";
import DiceScreen from "./Screens/Dice";
import MySQLCheatSheet from "./Screens/MySQLCheatSheet";
import HTMLCheatSheet from "./Screens/HTMLCheatSheet";
import JavascriptCheatSheet from "./Screens/JavascriptCheatSheet";
import ReactCheatSheet from "./Screens/ReactCheatSheet";
import CSSCheatSheet from "./Screens/CSSCheatSheet";

const Stack = createNativeStackNavigator();

function App()  
{
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Weather" component={Weather}/>
        <Stack.Screen name="NewsFeed" component={NewsScreen}/>
        <Stack.Screen name="Article" component={Article}/>
        <Stack.Screen name="CurrencyConverter" component={CurrencyConverter}/>
        <Stack.Screen name="Cheatsheet" component={Cheatsheet}/>
        <Stack.Screen name="Todo" component={TodoScreen}/>
        <Stack.Screen name="Dice" component={DiceScreen}/>
        <Stack.Screen name="MySQL" component={MySQLCheatSheet}/>
        <Stack.Screen name="HTML" component={HTMLCheatSheet}/>
        <Stack.Screen name="React" component={ReactCheatSheet}/>
        <Stack.Screen name="Javascript" component={JavascriptCheatSheet}/>
        <Stack.Screen name="CSS" component={CSSCheatSheet}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App