import React, {useState, useEffect} from "react";

const { ScrollView } = require("react-native-gesture-handler");
const { SafeAreaView } = require("react-native-safe-area-context");
const { StyleSheet, Text, Image, View, Button } = require("react-native");

function Article({route, navigation})
{
    const {content, title, image} = route.params;
    const titleText = JSON.stringify(title);
    const contentText = JSON.stringify(content);
    const imageUrl = image;
    return(
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.header}>{titleText}</Text>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <Text style={styles.content}>{contentText}</Text>
            </ScrollView>
            <Button title="Go back" onPress={() => {
                navigation.goBack();
            }}/>
            <Text>{"\n\n\n\n"}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 35,
        fontWeight:'bold',
        color: '#000',
    },
    content:{
        fontSize:20,
        color:'#444',
    },
    image:{
        width:'100%',
        height:275,
    },
})

export default Article;