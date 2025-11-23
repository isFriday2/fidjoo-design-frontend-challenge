import { Stack } from 'expo-router';
import React from 'react';

export default function StoryBookStackLayout() {
  return (
    <Stack>
      {/* Only define the single index screen */}
      <Stack.Screen
        name="index"
        options={{
          // You can set a generic title, or update the title dynamically 
          // based on the step if you prefer a different UX.
          title: 'StoryBook', 
        }}
      />
      {/* Remove the definitions for select-heroes and bravo */}
    </Stack>
  );
}