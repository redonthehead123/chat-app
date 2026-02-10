import { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

// Start - The start/home screen where users enter their name and select a background color
const firebaseConfig = {
  apiKey: "AIzaSyAu_9rx8331da8RqYX5B3flE1G4Tkyb_Tc",
  authDomain: "meet-app-ac9c6.firebaseapp.com",
  projectId: "meet-app-ac9c6",
  storageBucket: "meet-app-ac9c6.firebasestorage.app",
  messagingSenderId: "1017297275614",
  appId: "1:1017297275614:web:ed67fab0fa0d1925dcd04f"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const Start = ({ navigation }) => {
  // State for storing the user's entered name
  const [name, setName] = useState('');
  
  // State for tracking the selected background color (defaults to dark color)
  const [backgroundColor, setBackgroundColor] = useState('#090C08');

  // Array of available background colors for the chat screen
  const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

  const signInUser = () => {
    const auth = getAuth(app);
    const displayName = name.trim() || 'Anonymous';

    signInAnonymously(auth)
      .then((result) => {
        if (result?.user) {
          navigation.navigate('Chat', {
            userId: result.user.uid,
            name: displayName,
            backgroundColor: backgroundColor,
          });
        } else {
          Alert.alert('Sign-in Error', 'No user returned from sign-in. Please try again.');
        }
      })
      .catch((error) => {
        Alert.alert('Sign-in Error', 'Could not sign in. Please check your internet connection and try again.');
        console.error('Anonymous sign-in failed:', error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ImageBackground 
        source={require('../assets/Background-Image.png')} 
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Hello Chatters!</Text>
          <Text style={styles.subtitle}>Pick a name and a background</Text>
        </View>

        <View style={styles.card}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Type your username here'
            placeholderTextColor={'#8F8A9A'}
          />

          <View style={styles.colorContainer}>
            <Text style={styles.colorText}>Choose Background Color:</Text>
            <View style={styles.colorOptions}>
              {/* Map through colors array and create a touchable circle for each color */}
              {colors.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorCircle,
                    { backgroundColor: color },
                    // Apply white border if this color is selected
                    backgroundColor === color && styles.selectedColor
                  ]}
                  onPress={() => setBackgroundColor(color)}
                />
              ))}
            </View>
          </View>

          {/* Button to sign in and navigate to Chat */}
          <TouchableOpacity
            style={styles.button}
            onPress={signInUser}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 14,
    padding: 18,
    marginBottom: 28,
  },
  textInput: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E2E2EA',
    marginTop: 6,
    marginBottom: 14,
    fontSize: 16,
    fontWeight: '400',
    color: '#2B2B2B',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  colorContainer: {
    width: '100%',
    marginVertical: 10
  },
  colorText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#6E6A7C',
    marginBottom: 10
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // Color circles: 50x50 with borderRadius of 25 (50/2) to make them perfectly round
  colorCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  // Style applied to the currently selected color circle
  selectedColor: {
    borderColor: '#111111'
  },
  button: {
    width: '100%',
    backgroundColor: '#757083',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});

export default Start;