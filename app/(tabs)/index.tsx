import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Profile from '@/components/Profile';



const { width } = Dimensions.get('window');

export default function HomeScreen() {


return (
<View style={styles.container}>
  <View style={styles.content}>

    <View>
      <ThemedText type='heading' weight='extrabold' color='text' style={styles.textStroke}>
        Hi, <Profile detail="name"/>
      </ThemedText>

      

    </View>


    <Text style={styles.title}>
      Home / Start Creation
    </Text>
    <Text style={styles.description}>
      This is the main screen where children will:
    </Text>
    <Text style={styles.step}>👤 See their profile (name + avatar)</Text>
    <Text style={styles.step}>📚 Browse their story collection</Text>
    <Text style={styles.step}>✨ Start creating a new story</Text>
    <View style={styles.dataInfo}>
      <Text style={styles.dataText}>
        📁 Data available in:
      </Text>
      <Text style={styles.dataText}>
        • /assets/data/child.json (child info)
      </Text>
      <Text style={styles.dataText}>
        • /assets/data/avatars.json (avatar images)
      </Text>
      <Text style={styles.dataText}>
        • /assets/data/book.json (example story)
      </Text>
    </View>
  </View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    paddingTop: width/(1638/471)/1.7,
    gap: 16,
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

  }
});