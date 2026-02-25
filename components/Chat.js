import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Chat - The chat screen that receives name and backgroundColor from Start
const Chat = ({ route, navigation, db, isConnected }) => {
  // Extract the user's name and selected background color from navigation route parameters
  const { name, backgroundColor, userId } = route.params;
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  }
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

  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  }

 useEffect(() => {
    let unsubMessages;
    
    if (isConnected === true) {
      // Fetch messages from Firestore when connected
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(q, async (docs) => {
        const newMessages = [];
        docs.forEach((doc) => {
          const data = doc.data();
          newMessages.push({
            _id: doc.id,
            ...data,
            createdAt: new Date(data.createdAt.toMillis()),
          });
        });
        setMessages(newMessages);
        // Cache messages to AsyncStorage
        await AsyncStorage.setItem('messages', JSON.stringify(newMessages));
      });
    } else {
      // Load cached messages from AsyncStorage when offline
      loadCachedMessages();
    }

    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, [isConnected]);

  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem('messages') || [];
    setMessages(JSON.parse(cachedMessages));
  };

  // Set the screen title to display the user's name
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

 return (
   <View style={[styles.container, { backgroundColor: backgroundColor }]}>
     <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={messages => onSend(messages)}
        user={{
          _id: userId,
          name: name,
        }}
      />
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
      { Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null }
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Chat;