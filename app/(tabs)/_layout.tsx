import { Tabs } from 'expo-router';
import React from 'react';

import CustomTabIcon from '@/components/CustomTab';
import { CustomLightTheme, CustomDarkTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { House, WandSparkles, Book, Gamepad2, Menu } from 'lucide-react-native';
import { Image, StyleSheet } from 'react-native';
import Header from '@/components/Header';


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

function CustomTab() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

  // Use a function to render the tabs with the theme applied
  const renderTabs = () => (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        // headerShown: true,
        // tabBarShowLabel: false, // Hides the title label
        // Set tabBarStyle background color if needed
        // tabBarStyle: { backgroundColor: theme.colors.background },
      }}>

      {/* 2. Use CustomTabIcon for each screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: '',
        
          header: () => <Header></Header>,
          headerTransparent: true,
          tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
            <CustomTabIcon name="index" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: '',
          header: () => <Header></Header>,
          tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
            <CustomTabIcon name="game" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="creation"
        options={{
          title: '',
          header: () => <Header></Header>,
          tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
            <CustomTabIcon name="creation" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="story"
        options={{
          title: '',
          header: () => <Header></Header>,
          tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
            <CustomTabIcon name="story" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: '',
          header: () => <Header></Header>,
          tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
            <CustomTabIcon name="menu" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );


  return renderTabs();
}

export default function TabLayout() {

  return (
    // <WithLucide></WithLucide>
    <CustomTab></CustomTab>
  );
}

