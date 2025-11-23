import React, { useState } from "react"; // 1. Import useState
import {
  View,
  Image,
  StyleSheet,
  Pressable, // 2. Import Pressable
} from "react-native";
import { MascotteEdited, IconStory2 } from "@/assets/assets";
import { ThemedText } from "./ThemedText";
import { useNavigation } from "@react-navigation/native"; // 3. Import useNavigation

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

export default function CreateStoryButton() {
    // Hooks
    const navigation = useNavigation(); // 4. Initialize navigation
    const [isPressed, setIsPressed] = useState(false); // 5. State for press effect

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

    // Define the base shadow height
    const shadowHeight = 6;

    const styles = StyleSheet.create({
        // Base button style
        button: {
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
            // paddingLeft:15,
            // paddingRight:10,
            borderRadius: 15,
            backgroundColor: theme.colors.primary,
            flexDirection: "row", // Moving display and flexDirection here for cleanliness
        },
        // Large shadow style (default state)
        largeShadow: {
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 6 }, // Base height
            shadowRadius: 0,
            shadowOpacity: 1,
            borderColor: theme.colors.shadow,
            borderWidth: 2,
            // You can add elevation for Android here if needed
            // elevation: shadowHeight, 
        },
        // Pressed shadow style (zero height)
        pressedShadow: {
            shadowOffset: { width: 0, height: 0 }, // Height is zero when pressed
            shadowRadius: 0,
            // You might want to offset the container itself for the "push-down" effect
            transform: [{ translateY: 2 }],
        },
    });

    // Function to handle navigation
    const handlePress = () => {
        navigation.navigate('storycreation' as never); 
    };

    return (
        <View>
            <Pressable // Use Pressable for button functionality
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={handlePress} // Navigation action
                style={[
                    styles.button,
                    styles.largeShadow,
                    // Apply pressedShadow style ONLY when isPressed is true
                    isPressed && styles.pressedShadow,
                ]}
            >
                {/* The content is placed directly inside Pressable. 
                  We don't need ThemedView since we are applying all styles directly to Pressable 
                  and handling the theme color (backgroundColor) in the StyleSheet.
                  The ThemedText components handle their own colors.
                */}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                    }}
                >
                    <Image source={IconStory2} style={{ width: 30, height: 30 }} />
                    <ThemedText
                        type="title"
                        weight="extrabold"
                        color="card"
                        style={{ lineHeight: 30 }}
                    >
                        Je Fair{"\n"}Une Histoire !
                    </ThemedText>
                    <ThemedText
                        type="body"
                        weight="extrabold"
                        color="card"
                        style={{ opacity: 0.5 }} // Use opacity: 0.5 instead of opacity: 50
                    >
                        1 Crédit
                    </ThemedText>
                </View>

                <Image source={MascotteEdited} />
            </Pressable>
        </View>
    );
}