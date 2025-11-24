import React from "react";
import { View, Image, StyleSheet, Pressable, ViewStyle, StyleProp } from "react-native";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';
import { useRouter } from "expo-router";

// The base shadow height as a constant
const SHADOW_HEIGHT = 6;

// Define a separate component to receive the 'pressed' style directly
interface BookCoverProps {
    book: any;
    theme: typeof CustomLightTheme;
    pressed: boolean; 
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
        shadowColor: 'transparent', 
    } : {};
    
    return (
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
        bookShadow: {
            shadowOffset: { width: 0, height: SHADOW_HEIGHT },
            shadowOpacity: 1,
            shadowRadius: 0,
        },
    });

    return (
        <Pressable 
            onPress={handlePress} 
            // Style function on the Pressable (this is allowed)
            style={({ pressed }) => ([
                { 
                    alignItems: "flex-start", 
                    shadowColor: theme.colors.primary, 
                    // The sinking effect
                    transform: [{ translateY: pressed ? SHADOW_HEIGHT : 0 }], 
                }, 
                styles.bookShadow,
                // Remove the *outer* shadow when pressed
                pressed && { 
                    shadowOffset: { width: 0, height: 0 }, 
                    shadowOpacity: 0, 
                }
            ])}
        >
            {/* Pressable's children-as-a-function prop to pass the pressed state */}
            {({ pressed }) => (
                <BookCover book={book} theme={theme} pressed={pressed} />
            )}
        </Pressable>
    )
}