import React from "react";
// 1. You must import the Image component from react-native
import { Image, StyleSheet, View, Text } from "react-native";

import { useTheme } from '@react-navigation/native';
import { AppTheme, ThemeColors } from '@/constants/theme';
import { Paperclip } from "lucide-react-native";


export type ProfileDetailType = "name" | "icon";

// 2. Define the Props Interface for the component
interface ProfileProps {
    detail: ProfileDetailType;
}




// You need to destructure the 'detail' prop from the props object
export default function Profile({ detail }: ProfileProps) {

    const theme = useTheme() as AppTheme;

    // Assuming these paths are correct for your Expo project
    const userData = require('@/assets/data/child.json');
    // Assuming 'child.json' is an array and you want the first element
    const user1 = userData[0]; 

    const avatars = require('@/assets/data/avatars.json');
    
    // Assuming user1["avatar"] is the index (1-based) to find the avatar object
    const userAvatar = avatars[user1["avatar"] - 1];
    
    // Store the avatar URL from the JSON object
    const avatarUrl = userAvatar ? userAvatar["url"] : null;

    const styles = StyleSheet.create({
        icon: {
            width: 42,
            height: 42,
            borderRadius: 3, // Optional: Makes the image round
        },
        profileContainer: {
            padding: 8,
            backgroundColor:"white",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: theme.colors.border,
            paddingBottom: 14,

            shadowColor: theme.colors.border,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 0,
            shadowOpacity: 1,

            transform : [{
                rotate: "15deg",
                
            }],
            overflow:"visible"
        },

        paperClip: {
            position:"absolute",
            top: -10,
            right: 4,
            zIndex:1,
            
            
        }
    });
    // 2. Use the switch statement to return the specific element based on 'detail'
    switch(detail) {
        case "name":
            // Return the name string
            return user1["first_name"];
            
        case "icon":
            // Return the JSX element for the Image
            if (avatarUrl) {
                return (
                    <View style={styles.profileContainer}>
                        <Paperclip width={20} height={20} style={styles.paperClip}/>
                        <Image 
                            // Use the avatar URL for the source
                            source={{ uri: avatarUrl }}
                            // Apply the specified size via a style object
                            style={[styles.icon, {zIndex : 0}]}
                        />
                        
                    </View>
                    
                );
            }
            // Fallback if the URL isn't found
            return null; 
            
        default:
            // Optional: return null or a default element if 'detail' is not recognized
            return null;
    }



}
