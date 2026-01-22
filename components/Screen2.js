import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

// Screen2 - The chat screen that receives name and backgroundColor from Screen1
const Screen2 = ({ route, navigation }) => {
  // Extract the user's name and selected background color from navigation route parameters
  const { name, backgroundColor } = route.params;

  // Set the screen title to display the user's name
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

 return (
   <View style={[styles.container, { backgroundColor: backgroundColor }]}>
     <Text>Hello Screen2!</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Screen2;