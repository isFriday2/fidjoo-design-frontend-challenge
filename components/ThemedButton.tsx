import React, { ReactNode } from 'react';
import {
  Pressable,
  type PressableProps,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { type AppTheme } from '@/constants/theme';
import { ThemedText } from './ThemedText';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

export type ButtonProps = PressableProps & {
  title?: string; 
  children?: ReactNode; 
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'light' | 'warn';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
  elevated?: boolean;
  shadow?: 'default' | 'light' | 'warn';
  border?: 'default' | 'light' | 'warn';
};

export function ThemedButton({
  title,
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  shadow = 'default',
  border = 'default',
  disabled,
  style,
  elevated = false,
  ...rest
}: ButtonProps) {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;


    const backgroundColor = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        tertiary: theme.colors.tertiary,
        light: theme.colors.border,
        warn: "#FD6C5F",
        outline: 'transparent',
    }[variant];

    const textColor = {
        primary: '#FFFFFF',
        secondary: '#11181C',
        tertiary: '#11181C',
        outline: theme.colors.primary,
        light: theme.colors.border,
        warn: "#FFFFFF",
    }[variant];

    
    const padding = {
        small: 12,
        medium: 16,
        large: 20,
    }[size];

    const fontSize = {
        small: 14,
        medium: 16,
        large: 18,
    }[size];

    const shadowColor = {
        default: theme.colors.shadow,
        light: theme.colors.stroke,
        warn: theme.colors.notification,

    }[shadow];

    const borderColor = {
        default: theme.colors.shadow,
        light: theme.colors.stroke,
        warn: theme.colors.notification,
    }[shadow];


    const isDisabled = disabled || loading;

    // Helper in case `style` is a function (Pressable supports that)
    const resolveUserStyle = (
        pressed: boolean
    ): StyleProp<ViewStyle> => {
        if (typeof style === 'function') {
        return style({
            pressed,
            hovered: false
        });
        }
        return style;
    };

    return (
        <Pressable
        style={({ pressed }) => {
            const baseStyles: StyleProp<ViewStyle>[] = [
            styles.button,
            {
                backgroundColor,
                padding,
                opacity: pressed ? 0.8 : isDisabled ? 0.5 : 1,
                borderWidth: variant === 'outline' ? 2 : 0,
                borderColor: theme.colors.primary,
                width: fullWidth ? '100%' : undefined,
            },
            ];

            if (elevated) {
            baseStyles.push({
                shadowColor,
                shadowOffset: { width: 0, height: pressed ? 0 : 6 },
                shadowRadius: 0,
                shadowOpacity: 1,
                borderColor,
                borderWidth: 2,
                transform: pressed ? [{ translateY: 2 }] : [],
            });
            }

            baseStyles.push(resolveUserStyle(pressed));

            return baseStyles;
        }}
        disabled={isDisabled}
        {...rest}
        >
        {loading ? (
            <ActivityIndicator color={textColor} />
        ) : children ? (
            // If children are provided, render them instead of the default title text
            children
        ) : (
            <ThemedText
            type="body"
            weight="extrabold"
            style={[styles.buttonText, { color: textColor, fontSize }]}
            >
            {title}
            </ThemedText>
        )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
  },
});