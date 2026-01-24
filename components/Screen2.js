import { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from "react-native-gifted-chat";

// Screen2 - The chat screen that receives name and backgroundColor from Screen1
const Screen2 = ({ route, navigation }) => {
  // Extract the user's name and selected background color from navigation route parameters
  const { name, backgroundColor } = route.params;
  // Prepare initial messages so they appear immediately on load
  const now = new Date();
  const initialMessages = [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(now.getTime() - 1000),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: `${name} has joined the chat`,
      createdAt: now,
      system: true,
    },
  ];
  // State to hold chat messages (initialized with welcome messages)
  const [messages, setMessages] = useState(initialMessages);

  // Messages are initialized above; no need for an effect here

  // Handler for sending new messages - appends new messages to existing message list
  const onSend = (newMessages) => {
   setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

  // Customizes the appearance of message bubbles with different colors for sent/received messages
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  // Set the screen title to display the user's name
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
      {/* keyboard avoiding view for better input experience on different platforms */}
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
      { Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Screen2;