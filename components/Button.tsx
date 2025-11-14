import {
  Pressable,
  type PressableProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { type AppTheme } from '@/constants/theme';
import { ThemedText } from './ThemedText';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
};

export function Button({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const theme = useTheme() as AppTheme;

  const backgroundColor = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    tertiary: theme.colors.tertiary,
    outline: 'transparent',
  }[variant];

  const textColor = {
    primary: '#FFFFFF',
    secondary: '#11181C',
    tertiary: '#11181C',
    outline: theme.colors.primary,
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

  const isDisabled = disabled || loading;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor,
          padding,
          opacity: pressed ? 0.8 : isDisabled ? 0.5 : 1,
          borderWidth: variant === 'outline' ? 2 : 0,
          borderColor: theme.colors.primary,
          width: fullWidth ? '100%' : undefined,
        },
        style,
      ]}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <ThemedText
          type="body"
          weight="bold"
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
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonText: {
    textAlign: 'center',
  },
});
