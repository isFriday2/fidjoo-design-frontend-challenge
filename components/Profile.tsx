import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { Paperclip,Zap } from "lucide-react-native";

import { ThemedText } from "./ThemedText";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';


export type ProfileDetailType = "name" | "icon" | "credit";

// Define the Props Interface for the component
interface ProfileProps {
    detail: ProfileDetailType;
}


export default function Profile({ detail }: ProfileProps) {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

    const userData = require('@/assets/data/child.json');
    const user1 = userData[0]; 

    const avatars = require('@/assets/data/avatars.json');
    const userAvatar = avatars[user1["avatar"] - 1];
    
    // Store the avatar URL from the JSON object
    const avatarUrl = userAvatar ? userAvatar["url"] : null;

    const styles = StyleSheet.create({
        icon: {
            width: 42,
            height: 42,
            borderRadius: 3, 
        },
        profileContainer: {
            padding: 8,
            height: 65,
            backgroundColor:"white",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: theme.colors.border,
            transform : [{
                rotate: "15deg",
                
            }],
            overflow:"visible"
        },

        paperClip: {
            position:"absolute",
            top: -10,
            right: 0,
            zIndex:1,
            
            
        },

        zap: {
     

        },
        roundedContainer :{
            backgroundColor:"white",
            borderRadius:30,
            borderWidth: 1,
            borderColor: theme.colors.border,
            padding: 3,
            paddingRight:15,
            paddingLeft:10,
            justifyContent:"center",
            alignItems: "center"
        },

        shortShadow : {
            shadowColor: theme.colors.border,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 0,
            shadowOpacity: 1,

        }
    });
    // Use the switch statement to return the specific element based on 'detail'
    switch(detail) {
        case "name":
            // Return the name string
            return user1["first_name"];
            
        case "icon":
            // Return the JSX element for the Image
            if (avatarUrl) {
                return (
                    <View style={[styles.shortShadow, styles.profileContainer]}>
                        <Paperclip width={20} height={20} style={styles.paperClip}/>
                        <Image 
                            source={{ uri: avatarUrl }}
                            style={[styles.icon, {zIndex : 0}]}
                        />
                        
                    </View>
                    
                );
            }
            // Fallback if the URL isn't found
            return null; 

        case "credit":
            return (
                <View style={[{
                    alignItems: "flex-start"
                }]}>
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }, styles.roundedContainer, styles.shortShadow]}>
                        <Zap width={18} height={18} 
                        fill={theme.colors.tertiary} 
                        stroke={theme.colors.tertiary}
                        style={[styles.zap]}/>

                        <ThemedText type="subtitle" weight="extrabold" color="text" >
                        
                            {user1["credits"]}
                        </ThemedText>
                    </View>
                </View>
               
            )
            
        default:
            return null;
    }



}
