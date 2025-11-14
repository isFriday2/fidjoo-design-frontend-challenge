import { Pressable, type PressableProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { type AppTheme } from '@/constants/theme';

export type CardProps = PressableProps & {
  children: React.ReactNode;
  elevated?: boolean;
};

export function Card({
  children,
  elevated = true,
  style,
  ...rest
}: CardProps) {
  const theme = useTheme() as AppTheme;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.colors.card,
          opacity: pressed ? 0.9 : 1,
          shadowColor: '#000',
          shadowOffset: elevated ? { width: 0, height: 2 } : { width: 0, height: 0 },
          shadowOpacity: elevated ? 0.1 : 0,
          shadowRadius: elevated ? 8 : 0,
          elevation: elevated ? 3 : 0,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
  },
});
