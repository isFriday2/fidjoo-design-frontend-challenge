import { Stack } from 'expo-router';
import React from 'react';

export default function StoryBookStackLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{
      
          title: 'The Sweet Quest of Prince Chocolat and Glim', 
        }}
      />

    </Stack>
  );
}