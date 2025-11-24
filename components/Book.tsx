import React from "react";
import { View, Image, StyleSheet, Pressable, ViewStyle, StyleProp } from "react-native";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';
import { useRouter } from "expo-router";

// Define the base shadow height as a constant
const SHADOW_HEIGHT = 6;

// Define a separate component to receive the 'pressed' style directly
// This is the cleanest way to apply conditional styling to a child element
// when the parent is Pressable.
interface BookCoverProps {
    book: any;
    theme: typeof CustomLightTheme;
    pressed: boolean; // Explicitly receive the pressed state
}

const BookCover = ({ book, theme, pressed }: BookCoverProps) => {
    
    // Define styles that rely on theme colors outside the component function
    const styles = StyleSheet.create({
        // Define base shadow properties
        bookShadow: {
            shadowOffset: { width: 0, height: SHADOW_HEIGHT },
            shadowOpacity: 1,
            shadowRadius: 0,
        },
        // Base book cover styles
        bookCover: {
            // NOTE: ShadowColor on View. The primary shadow is now on the Pressable.
            // This inner shadow is using 'card' color.
            shadowColor: theme.colors.card, 
            alignItems: "center",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderWidth: 3,
            borderColor: theme.colors.primary,
        },
        book: {
            alignItems: "center",
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            borderWidth: 3,
            borderColor: theme.colors.primary,
        },
    });

    // Conditional styles for the inner BookCover View
    const innerPressedStyle: StyleProp<ViewStyle> = pressed ? {
        shadowOffset: { width: 0, height: 0 }, 
        shadowOpacity: 0,
        shadowColor: 'transparent', // Ensure shadow is completely gone
    } : {};
    
    return (
        // Apply the inner shadow styles conditionally here
        <View style={[styles.bookCover, styles.bookShadow, innerPressedStyle]}>
            <Image 
                source={{ uri: book["cover_image"]}} 
                width={120} 
                height={131} 
                style={styles.book}
            />
        </View>
    );
};


// Main Component
export default function Book(){
    const router = useRouter();
    const books = require('@/assets/data/book.json')
    const book = books[0]

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

    const handlePress = () => {
      router.push('/storybook'); 
    };

    // Define styles for the Pressable (outer shadow)
    const styles = StyleSheet.create({
        // Outer shadow styles
        bookShadow: {
            shadowOffset: { width: 0, height: SHADOW_HEIGHT },
            shadowOpacity: 1,
            shadowRadius: 0,
        },
    });

    return (
        <Pressable 
            onPress={handlePress} 
            // 1. Use the style function on the Pressable (this is allowed)
            style={({ pressed }) => ([
                { 
                    alignItems: "flex-start", 
                    shadowColor: theme.colors.primary, 
                    // 2. Add the sinking effect
                    transform: [{ translateY: pressed ? SHADOW_HEIGHT : 0 }], 
                }, 
                styles.bookShadow,
                // 3. Remove the *outer* shadow when pressed
                pressed && { 
                    shadowOffset: { width: 0, height: 0 }, 
                    shadowOpacity: 0, 
                }
            ])}
        >
            {/* 4. Use Pressable's children-as-a-function prop to pass the pressed state */}
            {({ pressed }) => (
                <BookCover book={book} theme={theme} pressed={pressed} />
            )}
        </Pressable>
    )
}