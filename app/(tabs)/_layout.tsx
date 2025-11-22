import { Tabs } from 'expo-router';
import React from 'react';

import { CustomLightTheme, CustomDarkTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { House, WandSparkles, Book, Gamepad2, Menu } from 'lucide-react-native';

function WithLucide() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => <House size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: 'Game',
          tabBarIcon: ({ color }: { color: string }) => <Gamepad2 size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="creation"
        options={{
          title: 'Creation',
          tabBarIcon: ({ color }: { color: string }) => <WandSparkles size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="story"
        options={{
          title: 'Story',
          tabBarIcon: ({ color }: { color: string }) => <Book size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'All items',
          tabBarIcon: ({ color }: { color: string }) => <Menu size={28} color={color} />,
        }}
      />
    </Tabs>
    
  );
}

export default function TabLayout() {

  return (
    <WithLucide></WithLucide>
  );
}
