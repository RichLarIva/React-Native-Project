/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";

import { View, Text, StyleSheet, Image, Button } from "react-native";
import axios from "axios";

function Weather({route, navigation}) 
{
    const { longitude, latitude } = route.params;
    const [temperatureData, setTemperatureData] = useState([]);
    const [location, setLocation] = useState("");
    const [icon, setIcon] = useState("");
    const [windSpeed, setWindSpeed] = useState(1);
    const [mainWeather, setMainWeather] = useState("Cloudy");

    const long = JSON.stringify(longitude);
    const lati = JSON.stringify(latitude);
    
  function fetchData()
  {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=a8bca3744c538761f151985510398c71`
    axios.get(url)
    .then((response) => {
      let data = response.data.main;
      let name = response.data.name;
      let iconType = response.data.weather[0].icon;
      setIcon(iconType);
      setMainWeather(response.data.weather[0].description);
      setLocation(name);
      setTemperatureData(data);
      setWindSpeed(response.data.wind.speed);
    })
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <View style={styles.body}>
      <View style={styles.header}>
      <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/w/${icon}.png`}}/>
        <Text style={styles.heading}>{location} {"\n"}{mainWeather}</Text>
      </View>
        <View style={styles.content}>
            <Text style={styles.data}>Min: {(temperatureData.temp_min - 273.15).toFixed(0)}C</Text>
            <Text style={styles.data}>Current: {(temperatureData.temp - 273.15).toFixed(0)}C</Text>
            <Text style={styles.data}>Max: {(temperatureData.temp_max - 273.15).toFixed(0)}C</Text>
            <Text style={styles.data}>Wind: {windSpeed} m/s</Text>
            <Text style={styles.data}>Humidity: {temperatureData.humidity}%</Text>
        </View>
        <Button title="Go Back" onPress={() => {
            navigation.goBack();
        }}/>
    </View>
  )
      
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'space-evenly',
    
  },
  header:{
    flex:1,
    flexDirection:'row',
    width: '80%',
    justifyContent:'space-between',
    marginHorizontal:'auto',
  }, 
  heading: {
        fontSize: 35,
        color:'#000',
        width:'100%',
  },
  content:{
    height: '80%',
  },
    data: {
        fontSize:45,
        color:'#000',
    },
    icon:{
      width:70,
      height:70,
    },
})

export default Weather