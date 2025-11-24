import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HappyMascot, IconStory2 } from '@/assets/assets';
import { ThemedText } from './ThemedText';
import { ThemedButton } from './ThemedButton';


export default function CreateStoryButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('storycreation' as never);
  };

  return (
    <ThemedButton
      onPress={handlePress}
      elevated 
      fullWidth
      size="large"
      variant="primary"
      // you can still pass style if needed
      style={{
        justifyContent: 'space-between',
      }}
    >
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <Image source={IconStory2} style={{ width: 30, height: 30 }} />
          <ThemedText
            type="title"
            weight="extrabold"
            color="card"
            style={{ lineHeight: 30 }}
          >
            Je Fair{'\n'}Une Histoire !
          </ThemedText>
          <ThemedText
            type="body"
            weight="extrabold"
            color="card"
            style={{ opacity: 0.5 }}
          >
            1 Crédit
          </ThemedText>
        </View>

        <Image source={HappyMascot} />
      </>
    </ThemedButton>
  );
}