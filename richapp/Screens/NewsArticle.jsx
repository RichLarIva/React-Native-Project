import React from "react";
import { ScrollView, Text, Image, StyleSheet, Button } from "react-native";

function NewsArticle({content, navigation})
{
    if(content[2] === null || content[2] === undefined)
    {
        return(
            <ScrollView>
                <Text style={styles.heading}>{content[0]}</Text>
                <Image style={styles.image} source={require('./images/error.png')}/>
                <Text style={styles.articleContent}>{content[1]}</Text>

                <Text>{"\n"}</Text>
            </ScrollView>
        )
    }
    else if(content[2] !== null)
    {
        return(
            <ScrollView>
                <Text style={styles.heading}>{content[0]}</Text>
                <Image style={styles.image} source={{uri: content[2]}}/>
                <Text style={styles.articleContent}>{content[1]}</Text>
                {/* <Button title="Read full story" onPress={(
                            navigation.navigate('Article', {title: content[0], image: content[2], content: content[3]})
                        )} /> */}
                <Text>{"\n"}</Text>
            </ScrollView>
        )
    }

    
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '0%',
        color: 'black',
        
    },
    articleContent: {
        fontSize:20,
        lineHeight:35,
        padding:20,
        color: '#000',
    },
    image:{
        width:'100%',
        height:275,
    },
})

export default NewsArticle;