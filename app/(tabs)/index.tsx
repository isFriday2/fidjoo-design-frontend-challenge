import { StyleSheet, Text, View, Image } from 'react-native';
import { HomeBanner } from '@/assets/assets';
import Header from '@/components/Header';

/**
 * Home Screen - Start Creation
 *
 * TODO: Implement the UI for:
 * - Display child's profile (name + avatar)
 * - Show previously generated stories as visual cards
 * - Central CTA button to start generating a new story
 *
 * Optional bonuses:
 * - Profile editing
 * - Games button with modal
 * - Credit balance → credit shop with parental gate
 *
 * Requirements:
 * - Use data from: /assets/data/child.json (child info)
 * - Use data from: /assets/data/avatars.json (avatar images)
 * - Use data from: /assets/data/book.json (previous stories)
 * - Child-friendly UI
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
       

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
  banner :{
    width: "100%",
    position:"absolute",
    top:0,
    left:0,
    resizeMode: 'contain'
  }
});
