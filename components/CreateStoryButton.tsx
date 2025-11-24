import React, { useState } from "react"; // 1. Import useState
import {
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { MascotteEdited, IconStory2 } from "@/assets/assets";
import { ThemedText } from "./ThemedText";
import { useNavigation } from "@react-navigation/native"; 
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

export default function CreateStoryButton() {

    const navigation = useNavigation(); 
    const [isPressed, setIsPressed] = useState(false); 
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;


    // const shadowHeight = 6;

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
            // elevation: shadowHeight, 
        },
        // Pressed shadow style (zero height)
        pressedShadow: {
            shadowOffset: { width: 0, height: 0 }, 
            shadowRadius: 0,
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
                    isPressed && styles.pressedShadow,
                ]}
            >
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
                        style={{ opacity: 0.5 }} 
                    >
                        1 Crédit
                    </ThemedText>
                </View>

                <Image source={MascotteEdited} />
            </Pressable>
        </View>
    );
}