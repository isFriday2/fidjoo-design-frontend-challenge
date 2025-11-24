import { Stack } from 'expo-router';
import React from 'react';
import Terminate from '@/components/Terminate';

export default function CreationStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Terminate></Terminate>
    
          // title: 'Story Creation Steps', 
          
          // headerShown: false,
        }}
      />

    </Stack>
  );
}