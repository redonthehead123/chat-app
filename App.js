// import the screens
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator for managing navigation between screens
const Stack = createNativeStackNavigator();

// Main App component that sets up the navigation structure
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
      >
        {/* Screen1: Start/home screen */}
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        />
        {/* Screen2: Chat screen */}
        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;