import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

function Cheatsheet({navigation}) {
    
    return(
        <View style={[styles.container, styles.body]}>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('HTML')
            }}>
              <Text style={styles.buttonText}>HTML</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('CSS')
            }}>
              <Text style={styles.buttonText}>CSS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('Javascript')
            }}>
              <Text style={styles.buttonText}>Javascript</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('React')
            }}>
              <Text style={styles.buttonText}>React</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('MySQL')
            }}>
              <Text style={styles.buttonText}>MySQL</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    pdf:{
        flex:1,
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    container: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        marginTop: 2,
    },
    button: {
      width: '30%',
      height: 80,
      justifyContent:'center',
      alignItems:'center',
      marginVertical: 5,
      marginHorizontal:7,
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
      height:450,
      marginLeft:'7.5%',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
      backgroundColor:'#f0f',
    },
    body: {
      flex: 1,
      backgroundColor: '#303030'
    },
    time:{
      fontSize:50,
      color:'black',
      width:'60%',
      height: '50%',
      textAlign:'center',
      fontWeight:'bold'
    }
  })
  

export default Cheatsheet