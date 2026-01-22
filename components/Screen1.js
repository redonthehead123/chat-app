import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

// Screen1 - The start/home screen where users enter their name and select a background color
const Screen1 = ({ navigation }) => {
  // State for storing the user's entered name
  const [name, setName] = useState('');
  
  // State for tracking the selected background color (defaults to dark color)
  const [backgroundColor, setBackgroundColor] = useState('#090C08');

  // Array of available background colors for the chat screen
  const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

  return (
    <ImageBackground 
      source={require('../assets/Background-Image.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Hello Screen1!</Text>
      
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Type your username here'
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

      {/* Button to navigate to Screen2 with name and selected background color */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2', { name: name, backgroundColor: backgroundColor })}
      >
        <Text style={styles.buttonText}>Start Chatting</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    backgroundColor: '#FFFFFF',
    borderRadius: 2
  },
  colorContainer: {
    width: '88%',
    marginVertical: 20
  },
  colorText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginBottom: 10
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // Color circles: 50x50 with borderRadius of 25 (50/2) to make them perfectly round
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5
  },
  // Style applied to the currently selected color circle
  selectedColor: {
    borderWidth: 3,
    borderColor: '#FFFFFF'
  },
  button: {
    width: '88%',
    backgroundColor: '#757083',
    padding: 15,
    alignItems: 'center',
    borderRadius: 2
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});

export default Screen1;