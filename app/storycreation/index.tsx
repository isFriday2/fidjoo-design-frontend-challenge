import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router'; 
import { useNavigation } from '@react-navigation/native';
import { CarouSelector } from '@/components/CarouSelector';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { Check } from 'lucide-react-native';
import ThemedNumber from '@/components/ThemedNumber';
import ProgressBar from '@/components/ProgressBar';


type CreationStep = 'THEME' | 'HEROES' | 'BRAVO';


type Props = {
  data: [];
  onNext: () => void
  onSelectChoice: (styleName: string) => void;
}
// Step 1
const SelectThemeStep = ({ data, onNext, onSelectChoice }: Props) => (
  <View style={styles.stepContainer}>

    {/* <ProgressBar steps={2} current={1}/>  */}
    {/* DONT HAVE TIME AH */}

    <View style={{ display:"flex", flexDirection:"row", gap: 10, alignItems: "center"}}>
      <ThemedNumber num={1}/>
      <ThemedText type='title' weight='extrabold'>
        Quelle aventure ?
      </ThemedText>
    </View>
    
    

    <CarouSelector 
      items = {data}
      onChange={ (item) => {
        onSelectChoice(item.name);
        
      }}
      />

    <ThemedButton
        onPress={onNext}
        elevated 
        variant="primary"
        border="default"
        shadow='default'
        style={{ width:"85%", display: "flex", flexDirection:"row", gap: 5}}
    >
        <ThemedText type='body' weight='extrabold' color='card'>Celui-ci</ThemedText>
        <Check strokeWidth={5} color={"white"} width={20} height={20}/>
    </ThemedButton>
  </View>
);

//  Step 2
const SelectHeroesStep = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => (
  <View style={styles.stepContainer}>
    <ThemedText>
      2. Select Heroes
    </ThemedText>
   
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
      <ThemedText>
      2. Select Heroes
    </ThemedText>
      <Button 
        title="Return to Tabs"
        onPress={handleReturnToTabs}
      />
    </View>
  );
};


// --- Main Screen Component ---

export default function CreationStepperScreen() {
  const navigation = useNavigation();

  const [currentStep, setCurrentStep] = useState<CreationStep>('THEME');

  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);

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
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     let title = '';
  //     navigation.setOptions({ title }); 
  //   }, [currentStep, navigation])
  // )

  const choices = require("@/assets/data/choices.json")

 const styles = choices.filter((item: { type: any; style: any; }) => item.type === "style");

  const renderStep = () => {
    switch (currentStep) {
      case 'THEME':
        return <SelectThemeStep 
                onNext={goToNextStep} 
                data={styles}
                onSelectChoice={(name) => setSelectedStyleName(name)}
                />;
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
        // justifyContent: 'center', 
        alignItems: 'center',

    },
    
    stepContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 5,

        
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    }
});