import React from "react";
// 1. You must import the Image component from react-native
import { Image, StyleSheet } from "react-native";


export type ProfileDetailType = "name" | "icon";

// 2. Define the Props Interface for the component
interface ProfileProps {
    detail: ProfileDetailType;
}


// You need to destructure the 'detail' prop from the props object
export default function Profile({ detail }: ProfileProps) {

    // Assuming these paths are correct for your Expo project
    const userData = require('@/assets/data/child.json');
    // Assuming 'child.json' is an array and you want the first element
    const user1 = userData[0]; 

    const avatars = require('@/assets/data/avatars.json');
    
    // Assuming user1["avatar"] is the index (1-based) to find the avatar object
    const userAvatar = avatars[user1["avatar"] - 1];
    
    // Store the avatar URL from the JSON object
    const avatarUrl = userAvatar ? userAvatar["url"] : null;


    // 2. Use the switch statement to return the specific element based on 'detail'
    switch(detail) {
        case "name":
            // Return the name string
            return user1["first_name"];
            
        case "icon":
            // Return the JSX element for the Image
            if (avatarUrl) {
                return (
                    <Image 
                        // Use the avatar URL for the source
                        source={{ uri: avatarUrl }}
                        // Apply the specified size via a style object
                        style={styles.icon}
                    />
                );
            }
            // Fallback if the URL isn't found
            return null; 
            
        default:
            // Optional: return null or a default element if 'detail' is not recognized
            return null;
    }

    // 3. The component should not have code outside of the switch block that
    // tries to return based on the 'detail' prop. The final return is handled
    // by the default case, or we can remove the final empty return.
    
    // Note: The code outside the switch/returns is unreachable if a case or default 
    // is hit. We can remove the redundant final return, as the component's 
    // functionality is covered above.
}

// Optional: Define a StyleSheet for better organization and performance
const styles = StyleSheet.create({
    icon: {
        width: 42,
        height: 42,
        borderRadius: 21, // Optional: Makes the image round
    },
});