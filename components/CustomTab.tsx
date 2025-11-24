import React from 'react';
import { NavIndex, NavGame, NavCreation, NavStory, NavMenu } from '@/assets/assets';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

// Define the mapping of tab names to icon assets
const ICON_MAP: { [key: string]: ImageSourcePropType } = {
  index: NavIndex,
  game: NavGame,
  creation: NavCreation,
  story: NavStory,
  menu: NavMenu,
};

interface CustomTabIconProps {
  name: string;
  color: string;
  focused: boolean;
}

export default function CustomTabIcon({ name, color, focused }: CustomTabIconProps) {
  const iconSource = ICON_MAP[name];
  if (!iconSource) return null; // Fallback if icon name is missing

  return (
    <View style={styles.container}>
      {/* 1. Conditional Line Indicator */}
      {focused && (
        <View style={[styles.focusLine, { backgroundColor: color }]} />
      )}
      
      {/* 2. Icon Image */}
      <Image
        source={iconSource}
        style={[
          styles.icon,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  focusLine: {
    position: 'absolute', 
    top: 0,
    width: '100%', 
    height: 5, 
    borderRadius: 1.5,
  },
  icon: {
    width: 28,
    height: 28,
    marginTop: 25, 
  },
});