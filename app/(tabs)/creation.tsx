import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import React from 'react';
/**
 * Creation Screen - Choose Style & Hero
 *
 * TODO: Implement the UI for:
 * 1. Step 1: Select a style from the choices.json data
 * 2. Step 2: Select a hero within that style
 *
 * Requirements:
 * - Visual, child-friendly navigation
 * - Use data from: /assets/data/choices.json
 * - Styles have type="style"
 * - Heroes have type="hero" and are linked to styles via the "style" property
 */
export default function CreationScreen() {
  return <Redirect href="/storycreation" />;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Choose Your Style & Hero (keep in mind that these are the two first steps of the creation process (6 steps in total) )
        </Text>
        <Text style={styles.description}>
          This is where children will select:
        </Text>
        <Text style={styles.step}>1. A visual style (wool, anime, realist, disney)</Text>
        <Text style={styles.step}>2. A hero character within that style</Text>
        <View style={styles.dataInfo}>
          <Text style={styles.dataText}>
            📁 Data available in: /assets/data/choices.json
          </Text>
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
  },
});
