import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

function HTMLCheatSheet({navigation}) {
    const source = { uri: "https://www.december.com/html/spec/HTML5-Cheat-Sheet.pdf", cache: true };
    return(
        <View style={styles.container}>
            <Pdf
            trustAllCerts={false}
            source={source}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log(error + " Error");
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}/>
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
        marginTop: 25,
    },
    button: {
      width: '25%',
      height: 80,
      justifyContent:'center',
      alignItems:'center',
      marginVertical: 5,
      marginHorizontal:15,
      flexDirection:'row',
      borderRadius: 5,
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
      backgroundColor: '#'
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
  

export default HTMLCheatSheet