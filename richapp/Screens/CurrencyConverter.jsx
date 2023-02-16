import axios from "axios"
import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import Dropdown from "./Dropdown";

function CurrencyConverter({navigation})
{
    const [result, setResult] = useState();
    const [converted, setConverted] = useState()
    const currencies = [{label: "US Dollar", value:'USD'}, {label: 'Polish Złoty', value: 'PLN'}, {label: 'Dansk Krona', value:'DKK'}, {label: 'Euro', value:'EUR'}, {label: 'Norsk Krona', value:'NOK'},]
    const [currency, setCurrency] = useState("USD");
    function convertCurrency(amount)
    {
        axios.get("https://open.er-api.com/v6/latest/"+currency.value)
        .then((results) => {
            let rate = results.data.rates;
            setConverted((amount * rate.SEK).toFixed(2) + " SEK");
        })
    }
    return(
        <View style={styles.flex}>
            <Dropdown label="Select Currency" data={currencies} onSelect={setCurrency}/>
            <Text>{"\n\n"}</Text>
            <Text style={styles.selected}>{currency.label}</Text>
            <TextInput style={styles.input} keyboardType='numeric' keyboardAppearance="dark" onChangeText={newAmount => convertCurrency(newAmount)} defaultValue="0"/>
            <Text>{"\n"}</Text>
            <View style={styles.divider}></View>
            <Text style={styles.selected}>SEK:</Text>
            <Text style={styles.selected}>{converted}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    selected:{
        color:'#000',
        fontWeight:'bold',
    },
    flex:{
        flex:1,
        alignItems:'center',
        flexWrap:'wrap',
    },
    input:{
        border:1,
        borderWidth: 1,
        borderColor:'#000',
        borderRadius: 20,
        padding:5,
        margin:2,
        width:200,
        color:'#000',
    },
    divider:{
        width:'75%',
        height:'1%',
        backgroundColor:'#000'
    },

})

export default CurrencyConverter