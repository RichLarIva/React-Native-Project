import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetLocation from "react-native-get-location";
import axios from "axios";

function HomeScreen({navigation}) {
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    function getLocation()
    {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
      .then(location => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;
      })
    }

    getLocation();
    useEffect(() => {
    setInterval(() => {

      var date = new Date()
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var hours = date.getHours();
      var min = date.getMinutes();
      var seconds = date.getSeconds();
      if (min < 10)
      {
        min = "0"+min;
      }
      if (hours < 10)
      {
        hourse = "0"+hours;
      }
      if (seconds < 10)
      {
        seconds = "0"+seconds;
      }

      setCurrentDate(year + "-" + month + "-" + day + "\n" + hours + ":" + min + ":" + seconds);
    }, 1000)
  }, [])
    return(
        <View style={styles.body}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={ () =>
                navigation.navigate('Weather', {longitude: longitude, latitude: latitude})
                }>
                  <Text style={styles.buttonText}>Weather</Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {
                navigation.navigate('Dice')
              }}>
                <Text style={styles.buttonText}>Dice</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Todo');
              }}>
                <Text style={styles.buttonText}>Todos</Text>
              </TouchableOpacity>
          </View>
            <View style={styles.row}>

            
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('NewsFeed')
      }}>
        <Text style={styles.buttonText}>News feed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('CurrencyConverter')
      }}>
        <Text style={styles.buttonText}>Currency Converter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('Cheatsheet')
      }}>
        <Text style={styles.buttonText}>Programming cheatsheets</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.view}>
      <Text style={styles.time}>{currentDate}</Text>
      </View>
    </View>
    )
}



const styles = StyleSheet.create({
  row:{
    flex:1,
    flexDirection:'row'
  },
    button: {
      width: '30%',
      height: 80,
      justifyContent:'center',
      alignItems:'center',
      marginVertical: 5,
      marginHorizontal:7,
      flexDirection:'row',
      borderRadius: 5,
      backgroundColor: '#0e0e0e',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '400',
    },
    view:{
      width:'85%',
      height:400,
      marginLeft:'7.5%',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
      backgroundColor:'#0e0e0e',
    },
    body: {
      flex: 1,
      backgroundColor: '#303030'
    },
    time:{
      fontSize:35,
      color:'black',
      width:'60%',
      height: '50%',
      textAlign:'center',
      fontWeight:'bold',
      color:'#2f2'
    }
  })
  

export default HomeScreen