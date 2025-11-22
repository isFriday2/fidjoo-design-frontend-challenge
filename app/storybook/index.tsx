import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router'; 
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router'; // Only used if you want to set dynamic header options.

// Define the steps (pages) for clarity
type CreationStep = 'THEME' | 'HEROES' | 'BRAVO';

// --- Step Components ---

// Component for Step 1
const SelectThemeStep = ({ onNext }: { onNext: () => void }) => (
  <View style={styles.stepContainer}>
    <Text style={styles.title}>1. Select Theme</Text>
    <Text style={styles.subtitle}>Choose the genre for your story.</Text>
    <Button 
      title="Go to Select Heroes"
      onPress={onNext}
    />
  </View>
);

// Component for Step 2: Now includes a 'Back' button
const SelectHeroesStep = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => (
  <View style={styles.stepContainer}>
    <Text style={styles.title}>2. Select Heroes</Text>
    <Text style={styles.subtitle}>Pick the main characters for the story.</Text>
    
    <View style={styles.buttonGroup}>
      <Button 
        title="⬅️ Back to Theme"
        onPress={onBack}
      />
      <Button 
        title="Go to Bravo! ➡️"
        onPress={onNext}
      />
    </View>
  </View>
);

// Component for Step 3: End of the flow
const BravoStep = () => {
  const router = useRouter();

  const handleReturnToTabs = () => {
    // Explicitly navigate back to the Home tab to exit the stack cleanly
    router.replace('/'); 
  };
  
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>3. Bravo!</Text>
      <Text style={styles.subtitle}>Your creation is complete.</Text>
      <Button 
        title="Return to Tabs"
        onPress={handleReturnToTabs}
      />
    </View>
  );
};


// --- Main Screen Component ---

export default function StorybookStepperScreen() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<CreationStep>('THEME');

  // Logic to move forward
  const goToNextStep = () => {
    if (currentStep === 'THEME') {
      setCurrentStep('HEROES');
    } else if (currentStep === 'HEROES') {
      setCurrentStep('BRAVO');
    }
  };

  // Logic to move backward
  const goToPreviousStep = () => {
    if (currentStep === 'HEROES') {
      setCurrentStep('THEME');
    }
    // Note: 'THEME' is the first step, no back action needed here.
  };

  // Dynamic Header Title (Optional, but recommended)
  useFocusEffect(
    React.useCallback(() => {
      let title = '';
      if (currentStep === 'THEME') {
        title = '1. Select Theme';
      } else if (currentStep === 'HEROES') {
        title = '2. Select Heroes';
      } else {
        title = 'Bravo!';
      }
      navigation.setOptions({ title }); 
    }, [currentStep, navigation])
  );

  const renderStep = () => {
    switch (currentStep) {
      case 'THEME':
        return <SelectThemeStep onNext={goToNextStep} />;
      case 'HEROES':
        return <SelectHeroesStep onNext={goToNextStep} onBack={goToPreviousStep} />;
      case 'BRAVO':
        return <BravoStep />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderStep()}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20,
    },
    stepContainer: {
        width: '80%', // Make buttons easier to click
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        marginBottom: 30,
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    }
});