import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MascotteEdited, IconStory2 } from "@/assets/assets";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

export default function CreateStoryButton() {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

    const styles = StyleSheet.create({
        button :{
            justifyContent:"space-between", 
            alignItems:"center", 
            padding:20,
            borderRadius: 15,
            backgroundColor: theme.colors.primary
        },
        largeShadow :{
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 6 },
            shadowRadius: 0,
            shadowOpacity: 1,
            borderColor: theme.colors.shadow,
            borderWidth: 2
        }
    })
    return (
        <View>
            <ThemedView style={[{
                display:"flex", flexDirection:"row", 
                }, styles.button, styles.largeShadow]} >
                <View style={{
                    display:"flex", flexDirection:"column", gap: 5
                }}>
                    <Image source={IconStory2} style={{width: 30, height: 30}}/>
                    <ThemedText type="title" weight="extrabold" color="card" style={{lineHeight : 30}}>
                        Je Fair{"\n"}Une Histoire !
                    </ThemedText>
                    <ThemedText type="body" weight="extrabold" color="card" 
                    style={{ opacity: 50}}>
                        1 Crédit
                    </ThemedText>
                    
                </View>

                <Image source={MascotteEdited} />
            </ThemedView>
        </View>
    )
}