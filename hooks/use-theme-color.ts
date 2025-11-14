/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { ExtendedTheme } from '@/constants/theme';
import { useTheme as useNavigationTheme } from '@react-navigation/native';


// Custom hook that returns the properly typed theme
export function useAppTheme() {
  return useNavigationTheme() as ExtendedTheme;
}

