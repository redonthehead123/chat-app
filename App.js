// import the screens
import Start from './components/Start';
import Chat from './components/Chat';
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator for managing navigation between screens
const Stack = createNativeStackNavigator();

// Main App component that sets up the navigation structure
const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAu_9rx8331da8RqYX5B3flE1G4Tkyb_Tc",
    authDomain: "meet-app-ac9c6.firebaseapp.com",
    projectId: "meet-app-ac9c6",
    storageBucket: "meet-app-ac9c6.firebasestorage.app",
    messagingSenderId: "1017297275614",
    appId: "1:1017297275614:web:ed67fab0fa0d1925dcd04f"
  };

  // Initialize Firebase
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        {/* Screen1: Start/home screen */}
        <Stack.Screen
          name="Start"
          component={Start}
        />
        {/* Chat: Chat screen */}
        <Stack.Screen
          name="Chat"
        >
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;