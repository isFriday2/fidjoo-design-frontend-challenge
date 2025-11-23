import { Text, type TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Fonts, type AppTheme } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  type?: 'heading' | 'body' | 'title' | 'subtitle' | 'caption';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: keyof AppTheme['colors'];
};

export function ThemedText({
  style,
  type = 'body',
  weight = 'regular',
  color,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme() as AppTheme;

  const fontFamily =
    type === 'heading' || type === 'title' 
    || type === 'subtitle'
      ? Fonts.heading[weight as keyof typeof Fonts.heading] || Fonts.heading.regular
      : Fonts.body[weight as keyof typeof Fonts.body] || Fonts.body.regular;

  const fontSize = {
    heading: 28,
    title: 24,
    subtitle: 20,
    body: 16,
    caption: 14,
  }[type];

  const textColor = color ? theme.colors[color] : theme.colors.text;

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize,
          color: textColor,
        },
        style,
      ]}
      {...rest}
    />
  );
}
