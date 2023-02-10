/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, PermissionsAndroid, Platform, Button} from 'react-native';

function App()
{
  const [geoLocation, setGeoLocation] = useState("");

  Geolocation.getCurrentPosition((pos) => {
    
  })

}