import { View, type ViewProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { type AppTheme } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  backgroundColor?: keyof AppTheme['colors'];
};

export function ThemedView({
  style,
  backgroundColor,
  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme() as AppTheme;
  const bgColor = backgroundColor ? theme.colors[backgroundColor] : undefined;

  return <View style={[{ backgroundColor: bgColor }, style]} {...otherProps} />;
}
