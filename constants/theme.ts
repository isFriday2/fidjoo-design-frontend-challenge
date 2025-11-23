import { DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import { Platform } from 'react-native';

// Extend React Navigation theme colors to include secondary and tertiary
export interface ExtendedTheme extends Theme {
  colors: Theme['colors'] & {
    secondary: string;
    tertiary: string;
    shadow: string;
  };
}

// Export Theme type for better TypeScript support
export type AppTheme = ExtendedTheme;
export type ThemeColors = ExtendedTheme['colors'];




// Font types
export type HeadingFontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type BodyFontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

// Font mappings
export const Fonts = {
  heading: {
    regular: 'Baloo2-Regular',
    medium: 'Baloo2-Medium',
    semibold: 'Baloo2-SemiBold',
    bold: 'Baloo2-Bold',
    extrabold: 'Baloo2-ExtraBold',
  },
  body: {
    regular: 'Raleway-Regular',
    medium: 'Raleway-Medium',
    semibold: 'Raleway-SemiBold',
    bold: 'Raleway-Bold',
  },
  system: Platform.select({
    ios: 'system-ui',
    default: 'normal',
    web: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  }),
} as const;

export type AppFonts = {
  heading: { [K in HeadingFontWeight]: (typeof Fonts)['heading'][K] };
  body: { [K in BodyFontWeight]: (typeof Fonts)['body'][K] };
};


// Thème personnalisé pour React Navigation
export const CustomLightTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#49AAFF',
    secondary: "#8DD1FF",
    tertiary: '#ffb71c',
    background: '#EDEBE5',
    card: '#F4F2EF',
    text: '#11181C',
    border: '#E4E4E7',
    notification: '#ff3b30',
    shadow:"#2A608F",
  },
  fonts: {
    regular: {
      fontFamily: Fonts.body.regular,
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: Fonts.body.medium,
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: Fonts.body.bold,
      fontWeight: '700' as const,
    },
    heavy: {
      fontFamily: Fonts.heading.extrabold,
      fontWeight: '800' as const,
    },
  },
};

export const CustomDarkTheme: ExtendedTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#49AAFF',
    secondary: "#8DD1FF",
    tertiary: '#ffb71c',
    background: '#151718',
    card: '#151718',
    text: '#FFFFFF',
    border: '#E4E4E7',
    notification: '#ff453a',
    shadow:"#2A608F",
  },
  fonts: {
    regular: {
      fontFamily: Fonts.body.regular,
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: Fonts.body.medium,
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: Fonts.body.bold,
      fontWeight: '700' as const,
    },
    heavy: {
      fontFamily: Fonts.heading.extrabold,
      fontWeight: '800' as const,
    },
  },
};
