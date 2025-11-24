import React from "react";
import { ThemedText } from "./ThemedText";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';


// 1. Define the props interface
interface Number {
    num: number;
}


export default function ThemedNumber({ num }: Number){
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

    return (
        <ThemedText type="title" weight="extrabold" color="card" style={{
            paddingHorizontal:15, 
            borderRadius:30, backgroundColor: theme.colors.primary, 
            borderWidth:1,
            borderColor:theme.colors.shadow,

        }}>
            {num}
        </ThemedText>
    )
}