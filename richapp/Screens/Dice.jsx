import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from "react-native"
import diceone from "./images/diceone.png";
import dicetwo from "./images/dicetwo.png";
import dicethree from "./images/dicethree.png";
import dicefour from "./images/dicefour.png";
import dicefive from "./images/dicefive.png";
import dicesix from "./images/dicesix.png";


function DiceScreen({navigation})
{

    const diceImages = [
        diceone,
        dicetwo,
        dicethree,
        dicefour,
        dicefive,
        dicesix
    ]
    function randomIntFromInterval(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const [number, setNumber] = useState(randomIntFromInterval(1, 6));
    function castDie()
    {
        setNumber(randomIntFromInterval(1, 6))
    }
    return(
        <View style={styles.container}>


            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.goBack();
            }}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                castDie();
            }}>
                <Text style={styles.buttonText}>Cast the die</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{"\n"}{number}{"\n\n"}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                castDie();
            }}>
             <Image style={styles.image} source={diceImages[number-1]}/>
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonRow:{
        flex:1,
        flexDirection:'row',
        height:'0%',
    },
    container: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 25,
    },
    text:{
        color:'#000',
        fontSize:20,
        fontWeight: 'bold',
    },
    image:{
        width:150,
        height:150,
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
      backgroundColor: '#a2a2a2'
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
  
export default DiceScreen