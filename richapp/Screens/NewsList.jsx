import React from "react";
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import NewsArticle from "./NewsArticle";

function NewsList({news}){
    return(
        <View style={styles.container}>
                {news.map(article => {
                <ScrollView key={article.link}>
                <NewsArticle content={[article.title, article.description, article.urlToImage]}/>
            </ScrollView>
        })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: StatusBar.currentHeight,
        paddingBottom:StatusBar.currentHeight
      },
})

export default NewsList