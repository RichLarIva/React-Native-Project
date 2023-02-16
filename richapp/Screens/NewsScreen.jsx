import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, StatusBar, Button, Text } from 'react-native';
import axios from 'axios';
import NewsList from './NewsList';
import NewsArticle from './NewsArticle';

function NewsScreen({navigation}){
    const [news, setNews] = useState([]);
    function fetchData()
    {
        setNews([]);
        const url = "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
        axios.get(url)
        .then((response) => {
            let data = JSON.parse(JSON.stringify(response.data.articles))
                setNews(data);
                console.log(news);
        })

    }
    useEffect(() => {
        fetchData()
    }, [])
    return(
        <ScrollView>
            <Button onPress={() => {
                fetchData();
            }} title="Fetch news"/>
             {news.map(article => {
                return(
                <ScrollView key={article.url}>
                <NewsArticle content={[article.title, article.description, article.urlToImage, article.content]}/>
                <Button title="Read full story" onPress={() => {

                    navigation.navigate('Article', {title: article.title, image: article.urlToImage, content: article.content})
                }
                } />
                
        </ScrollView>)
        })} 
            <Button title="Go back" onPress={() => {
                navigation.goBack();
            }}/>
            <Text>{"\n\n\n\n"}</Text>
        </ScrollView>
    )
}

export default NewsScreen