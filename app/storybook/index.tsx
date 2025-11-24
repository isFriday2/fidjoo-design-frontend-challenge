import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router'; 
import { useNavigation } from '@react-navigation/native'

type CreationStep = 'THEME' | 'HEROES' | 'BRAVO';

// --- Step Components ---

const SelectThemeStep = ({ onNext }: { onNext: () => void }) => (
  <View style={styles.stepContainer}>
    <Text style={styles.title}>Book Page 1</Text>
    <Text style={styles.subtitle}>Choose the genre for your story.</Text>
    <Button 
      title="Next Page"
      onPress={onNext}
    />
  </View>
);

const SelectHeroesStep = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => (
  <View style={styles.stepContainer}>
    <Text style={styles.title}>2. Select Heroes</Text>
    <Text style={styles.subtitle}>Pick the main characters for the story.</Text>
    
    <View style={styles.buttonGroup}>
      <Button 
        title="Previous"
        onPress={onBack}
      />
      <Button 
        title="Next Page"
        onPress={onNext}
      />
    </View>
  </View>
);

const BravoStep = () => {
  const router = useRouter();

  const handleReturnToTabs = () => {
    router.replace('/'); 
  };
  
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>Last page of the book</Text>
      <Text style={styles.subtitle}>Yeahs</Text>
      <Button 
        title="Return to Tabs"
        onPress={handleReturnToTabs}
      />
    </View>
  );
};



export default function StorybookStepperScreen() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<CreationStep>('THEME');

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
  };

  useFocusEffect(
    React.useCallback(() => {
      let title = '';
      if (currentStep === 'THEME') {
        title = 'The Sweet Quest of Prince Chocolat and Glim Page 1/8';
      } else if (currentStep === 'HEROES') {
        title = 'The Sweet Quest of Prince Chocolat and Glim Page 2/8';
      } else {
        title = 'The Sweet Quest of Prince Chocolat and Glim Page 3/8';
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
        width: '80%',
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