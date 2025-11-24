import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';

import { ChevronRight } from 'lucide-react-native';

import { ThemedText } from '@/components/ThemedText';
import Profile from '@/components/Profile';
import CreateStoryButton from '@/components/CreateStoryButton';
import Book from '@/components/Book';

import { useNavigation } from "@react-navigation/native";

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';


const { width } = Dimensions.get('window');



export default function HomeScreen() {
  const navigation = useNavigation(); // 4. Initialize navigation

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 1,
    },
    content: {
      flex: 1,
      padding: 32,
      paddingTop: width/(1638/471)/1.7,
      gap: 15,
      justifyContent: 'flex-start',
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
    textStroke : {
      textShadowColor: 'white',
      textShadowOffset: { width: 3, height: 0 },
      textShadowRadius: 0,

      shadowColor: 'white',
      shadowRadius: 0,
      shadowOpacity: 1,
      shadowOffset: { width: -2, height: -2.5 },

    },
    flexBox :{
      display: "flex", 
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems: "center"
    },
    bookshelf: {
      display:"flex", 
      flexDirection:"column", 
      padding:20, 
      borderRadius: 15,
      backgroundColor: 'rgba(73, 170, 255, 0.1)',
    },
    bookshelfContainer :{
      padding:20,
      borderRadius: 13,
      backgroundColor: 'rgba(73, 170, 255, 0.2)',

    }
  });
  
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

  function handlePress() {
    navigation.navigate('story' as never); 
  }

  return (
  <View style={styles.container}>
    <View style={styles.content}>

      <View style={styles.flexBox}>
        {/* Show User's Profile */}
        <View>
          <ThemedText type='heading' weight='extrabold' color='text' style={styles.textStroke}>
            Hi, <Profile detail="name"/>
          </ThemedText>

          <Profile detail='credit'/>

        </View>
        <Profile detail="icon"/>
      
      </View>

      <CreateStoryButton/>

      <View style={{
        display : "flex",
        flexDirection: "column",
        gap: 5
      }}>
        <View style={styles.flexBox}>
          <ThemedText type='title' weight='extrabold' >
            Mon Livre
          </ThemedText>
          
          <Pressable 
            style={styles.flexBox}
            onPress={handlePress}
          >
            <ThemedText type='body' weight='extrabold' color='primary' >
              Tous
            </ThemedText>
            <ChevronRight color={theme.colors.primary}/>
          </Pressable>
          
        </View>
        <View style={styles.bookshelf}>
          <View style={styles.bookshelfContainer}>
            <Book/>
          </View>
        </View>
        
      </View>

    </View>
  </View>
  );
}

