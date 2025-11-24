import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';
import React from "react";
import { View, StyleSheet } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

interface ProgressProps {
    steps: number;    // total number of steps
    current: number;  // current step (1-based)
}

export default function ProgressBar({ steps, current }: ProgressProps) {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme;

    return (
        <View style={styles.container}>

            {/* LEFT ICON PLACEHOLDER */}
            <View style={styles.leftIconPlaceholder} />

            {/* STEPS */}
            <View style={styles.stepsRow}>
                {Array.from({ length: steps }).map((_, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < current;
                    const isCurrent = stepNumber === current;

                    if (isCurrent) {
                        return (
                            <View
                            key={index}
                            style={[
                                styles.stepBox,
                                { backgroundColor: theme.colors.secondary }, // your current step color
                            ]}
                            />
                        );
                    }

                    if (isCompleted) {
                        return (
                            <View
                                key={index}
                                style={[styles.stepBox, { backgroundColor: theme.colors.primary }]}
                            />
                        );
                    }

                    // Future steps
                    return (
                        <View
                            key={index}
                            style={[styles.stepBox, { backgroundColor: theme.colors.border }]}
                        />
                    );
                })}
            </View>

            {/* RIGHT ICON PLACEHOLDER */}
            <View style={styles.rightIconPlaceholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },

    leftIconPlaceholder: {
        width: 26,
        height: 26,
        backgroundColor: "#B0E0FF",
        borderRadius: 6,
    },

    rightIconPlaceholder: {
        width: 26,
        height: 26,
        backgroundColor: "#FFE58F",
        borderRadius: 6,
    },

    stepsRow: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-evenly",
        paddingHorizontal: 10,
        gap: 10,
    },

    stepBox: {
        width: 50,
        height: 18,
        borderRadius: 6,
    },

    currentStep: {
        overflow: "hidden",
        borderWidth: 0,
    },
});