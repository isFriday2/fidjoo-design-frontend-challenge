// ImageSelectorCarousel.tsx
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';
import { ThemedText } from "./ThemedText";


export type ImageItem = {
    idx: number;
    id: string | number;
    created_at?: string | null;
    updated_at?: string | null;
    name: string;
    description?: string;
    image: string | ImageSourcePropType; // url or require(...)
    animation?: string | null;
    type?: string;
    display_name?: string;
    style?: any;
    explanation?: string | null;
};

type Props = {
    items: ImageItem[];
    onChange?: (item: ImageItem) => void;
};

const getImageSource = (item: ImageItem): ImageSourcePropType => {
    if (typeof item.image === "string") {
        return { uri: item.image };
    }
    return item.image;
};

export const CarouSelector: React.FC<Props> = ({ items, onChange }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;


    const selectedItem = items[selectedIndex];
    const title = selectedItem.display_name || selectedItem.name || "";

    
    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        if(onChange) {
            onChange(items[index])
        }
    }

    const renderThumb = ({
        item,
        index,
    }: {
        item: ImageItem;
        index: number;
    }) => {
        const isSelected = index === selectedIndex;

        return (
        <View style={styles.thumbnailWrapper}>
            <Pressable
            onPress={() => handleSelect(index)}
            style={({ pressed }) => [
                styles.thumbnailContainer,
                isSelected && styles.thumbnailSelected,
                pressed && { opacity: 0.7 },
            ]}
            >
            <Image
                source={getImageSource(item)}
                style={styles.thumbnailImage}
                resizeMode="cover"
            />
            </Pressable>
            {isSelected && <View style={styles.arrow} />}

        </View>
        );
    };


    const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        alignItems: "center",
        width:"100%"
    },
    mainImage: {
        width:"85%",
        aspectRatio: 1,
        borderRadius: 20,
        overflow: "hidden",
    },
    title: {
        marginTop: 16,
        fontSize: 22,
        fontWeight: "700",
    },
    thumbnailList: {
        marginTop: 16,
        paddingHorizontal: 8,
        // height:100,
    },
    thumbnailWrapper: {
        alignItems: "center",
        marginHorizontal: 4,
    },
    thumbnailContainer: {
        width: 80,
        height: 80,
        borderRadius: 14,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: theme.colors.stroke,
        justifyContent: "center",
        alignItems: "center",
    },
    thumbnailSelected: {
        borderColor: theme.colors.primary,
        borderWidth: 6,
    },
    thumbnailImage: {
        width: "100%",
        height: "100%",
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: theme.colors.primary,
        marginTop: 4,
        borderRadius: 5,
    },
    pagination: {
        flexDirection: "row",
        marginTop: 8,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: theme.colors.stroke,
        marginHorizontal: 3,
    },
    dotActive: {
        width: 14,
        borderRadius: 7,
        backgroundColor: theme.colors.primary,
    },
    });

    return (
        <View style={styles.container}>
        {/* Main image */}
            <Image
                source={getImageSource(selectedItem)}
                style={styles.mainImage}
                resizeMode="cover"
            />

            {/* Dynamic title from selected item */}
            {title ? 
            <ThemedText type="subtitle" weight="extrabold" style={{ marginTop: 10, }}>
                {title}

            </ThemedText> : null}

            {/* Thumbnails */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                keyExtractor={(item) => String(item.id ?? item.idx)}
                renderItem={renderThumb}
                contentContainerStyle={styles.thumbnailList}
                style={{ flexGrow: 0, flexShrink:0 }}
            />

            {/* Pagination dots */}
            <View style={styles.pagination}>
                {items.map((_, index) => {
                const isActive = index === selectedIndex;
                return (
                    <View
                    key={index}
                    style={[styles.dot, isActive && styles.dotActive]}
                    />
                );
                })}
            </View>
        </View>
    );
};

