import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';


export default function Book(){

    const books = require('@/assets/data/book.json')
    const book = books[0]

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

    const styles = StyleSheet.create({
        book :{
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,

            borderWidth: 3,
            borderColor: theme.colors.primary,
        
            shadowColor: theme.colors.card,
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 1,
            shadowRadius: 0,
        }
    })
    return (
        <View>
            <Image source={{ uri: book["cover_image"]}} width={120} height={131}
            style={styles.book}/>
        </View>
    )
}