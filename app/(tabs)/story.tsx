import { Button, StyleSheet, Text, View } from 'react-native';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
/**
 * Story Viewer Screen
 *
 * TODO: Implement the UI for:
 * - Display each page of the story
 * - Show page text, audio player, and video
 * - Navigate through 8-10 pages
 *
 * Requirements:
 * - Use data from: /assets/data/book.json and /assets/data/book_pages.json
 * - Each page contains: text, audio URL, video URL
 * - Child-friendly navigation between pages
 */
export default function StoryScreen() {
    const router = useRouter();
  
    const handleReturnToTabs = () => {
      // Explicitly navigate back to the Home tab to exit the stack cleanly
      router.push('/storybook'); 
    };


  // return <Redirect href="/storybook" />;
  
  return (
      <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Story Viewer
        </Text>
          <Text style={styles.description}>
          This is where children will:
        </Text>
        <Text style={styles.step}>📖 Read the story text</Text>
        <Text style={styles.step}>🎵 Listen to audio narration</Text>
        <Text style={styles.step}>🎬 Watch animated videos</Text>
        <Text style={styles.step}>⬅️➡️ Navigate between pages</Text>
        <View style={styles.dataInfo}>
          <Button 
            title="Open Storybook"
            onPress={handleReturnToTabs}
          />
     
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  step: {
    fontSize: 14,
    marginLeft: 16,
    marginBottom: 4,
  },
  dataInfo: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(73, 170, 255, 0.1)',
  },
  dataText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 4,
  },
});
