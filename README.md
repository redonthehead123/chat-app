# Chat App - React Native

A React Native mobile chat application built with Expo that allows users to enter their name and customize the chat screen's background color before starting conversations.

## 📱 Project Overview

This is a two-screen React Native application that serves as the foundation for a chat messaging platform. Users begin on a start screen where they can personalize their experience by choosing a username and selecting a preferred background color for the chat interface.

## ✨ Features

### Start Screen (Screen1)
- **Background Image**: Custom background image for visual appeal
- **Username Input**: Text field to enter a personalized username
- **Color Selection**: Choose from 4 predefined background colors:
  - Dark Grey (`#090C08`) - Professional dark theme
  - Slate (`#474056`) - Muted purple tone
  - Light Blue (`#8A95A5`) - Calm blue-grey
  - Sage Green (`#B9C6AE`) - Soft natural green
- **Visual Feedback**: Selected color displays a white border highlight
- **Smooth Navigation**: Transition to chat screen with selected preferences

### Chat Screen (Screen2)
- **Personalized Header**: Displays the user's entered username
- **Custom Background**: Applies the user's selected background color
- **Responsive Layout**: Adapts to different screen sizes
- **Foundation for Messaging**: Ready for chat functionality implementation

## 📁 Project Structure

```
ex-5.1/
├── App.js                          # Main application entry point
├── index.js                        # React Native entry point
├── components/
│   ├── Screen1.js                 # Start/home screen component
│   └── Screen2.js                 # Chat screen component
├── assets/
│   ├── Background-Image.png       # Start screen background image
│   ├── icon.png                   # App icon
│   ├── favicon.png                # Browser favicon
│   ├── splash-icon.png            # Splash screen icon
│   └── adaptive-icon.png          # Android adaptive icon
├── .expo/                         # Expo configuration
├── node_modules/                  # Project dependencies
├── package.json                   # Project metadata and dependencies
├── app.json                       # Expo app configuration
├── README.md                      # This file
└── .gitignore                     # Git ignore rules
```

## 🛠️ Technologies Used

### Core Framework
- **React Native** - Cross-platform mobile development
- **React** - UI component library (v19.1.0)
- **Expo** - Development platform and build service

### Navigation
- **@react-navigation/native** (v7.1.28) - Navigation infrastructure
- **@react-navigation/native-stack** (v7.10.1) - Stack-based navigation

### UI Components Used
- **ImageBackground** - Background image display
- **View** - Container layouts
- **Text** - Text display
- **TextInput** - Username input field
- **TouchableOpacity** - Interactive color selection buttons
- **StyleSheet** - Component styling

### Development Tools
- **Expo CLI** - Command-line interface for Expo
- **React Native Screens** - Native screen management
- **Safe Area Context** - Safe area handling

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** - Install with: `npm install -g expo-cli`
- **Mobile Device** or **Emulator**
  - Physical device with Expo Go app (free from app store)
  - OR Android emulator
  - OR iOS simulator (Mac only)

### Installation Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd ex-5.1
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```
   This installs React Native, navigation libraries, and Expo dependencies.

3. **Start the development server:**
   ```bash
   npm start
   ```
   Or use: `expo start`

4. **Choose your platform:**
   - **Expo Go (Physical Device)**: Scan the QR code shown in terminal with Expo Go app
   - **Android Emulator**: Press `a` in terminal
   - **iOS Simulator** (Mac only): Press `i` in terminal
   - **Web Browser**: Press `w` in terminal

### Troubleshooting
- Clear cache: `npm start -- --clear`
- Reset modules: Delete `node_modules` and run `npm install` again
- Check Expo doctor: `expo doctor`

## 📖 Usage Guide

### User Journey

1. **App Launches**
   - Start screen (Screen1) displays with background image
   - Focus on username input field

2. **Enter Username**
   - Type desired username (e.g., "John", "Sarah")
   - Text appears in real-time as you type

3. **Select Background Color**
   - Four colored circles displayed below input
   - Tap any circle to select that color
   - Selected circle shows white border
   - Default selection: Dark Grey

4. **Start Chatting**
   - Tap "Start Chatting" button
   - App transitions to chat screen (Screen2)
   - Chat screen displays with:
     - Username in header/title bar
     - Selected background color
     - Ready for message input (future feature)

### Color Selection Details

| Color | Hex Code | Use Case |
|-------|----------|----------|
| Dark Grey | `#090C08` | Professional, night mode |
| Slate | `#474056` | Modern, sophisticated |
| Light Blue | `#8A95A5` | Calm, accessible |
| Sage Green | `#B9C6AE` | Natural, comfortable |

## 🏗️ Component Architecture

### Screen1.js (Start Screen)
**Purpose**: User onboarding and customization

**State Management:**
```javascript
- name: string          // User's entered username
- backgroundColor: string  // Selected background color (default: '#090C08')
```

**Key Functions:**
- `setName(text)` - Update username state
- `setBackgroundColor(color)` - Update selected color
- `navigation.navigate('Screen2', {name, backgroundColor})` - Navigate with parameters

**Rendering:**
- ImageBackground with background image
- TextInput for username entry
- Map function creates 4 color circles dynamically
- TouchableOpacity buttons for color selection
- TouchableOpacity for navigation button

### Screen2.js (Chat Screen)
**Purpose**: Display chat interface with user customization

**Route Parameters:**
```javascript
- name: string              // User's username from Screen1
- backgroundColor: string   // Selected color from Screen1
```

**Key Functions:**
- `useEffect(() => { navigation.setOptions({ title: name }) })` - Set header title
- Dynamic style application for background color

**Rendering:**
- View container with dynamic backgroundColor
- Header displays username
- Foundation for chat messages

### App.js (Navigation)
**Purpose**: Set up navigation structure

**Configuration:**
- NavigationContainer wraps entire app
- createNativeStackNavigator creates stack-based navigation
- Two screens: Screen1 and Screen2
- Screen1 set as initial route

## 🎨 Styling Details

### Color Circles
- **Dimensions**: 50px × 50px
- **Border Radius**: 25px (50÷2 = perfect circle)
- **Selected State**: 3px white border
- **Spacing**: 5px horizontal margins

### Layout
- **Container Width**: 88% of screen width
- **Centering**: Flex layout with center alignment
- **Responsive**: Works on phones and tablets

### Typography
- **Title**: 45px, 600 weight, white
- **Labels**: 16px, 300 weight, grey
- **Button Text**: 16px, 600 weight, white

## 📦 Dependencies Breakdown

```json
{
  "@react-navigation/native": "^7.1.28",
  "@react-navigation/native-stack": "^7.10.1",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-screens": "~4.16.0",
  "react-native-safe-area-context": "~5.6.0",
  "expo": "~54.0.31",
  "expo-status-bar": "~3.0.9"
}
```

**Why Each Dependency:**
- `@react-navigation/*` - Handle screen transitions
- `react` & `react-native` - Core framework
- `react-native-screens` - Optimized native screen management
- `react-native-safe-area-context` - Handle notches and safe areas
- `expo` & `expo-status-bar` - Development and runtime support

## 🔄 Data Flow

```
App.js
├── NavigationContainer
└── Stack Navigator
    ├── Screen1 (Start Screen)
    │   ├── State: name, backgroundColor
    │   ├── Renders: ImageBackground, TextInput, Color Circles
    │   └── Action: Navigate to Screen2 with { name, backgroundColor }
    │
    └── Screen2 (Chat Screen)
        ├── Receives: { name, backgroundColor } from route.params
        ├── Effect: Set header title to name
        └── Renders: View with dynamic backgroundColor
```

## 🎯 Available Commands

```bash
npm start          # Start development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm install        # Install dependencies
npm list           # Show installed packages
```

## 🚀 Future Enhancements

### Phase 1 - Messaging Features
- [ ] Chat message display (FlatList)
- [ ] Message input field
- [ ] Send message functionality
- [ ] Message timestamps
- [ ] User avatars

### Phase 2 - Advanced Features
- [ ] Message persistence (AsyncStorage)
- [ ] User authentication
- [ ] Multi-user chat support
- [ ] Real-time updates (Firebase/Backend)
- [ ] Image message support
- [ ] Emoji support

### Phase 3 - User Experience
- [ ] Message notifications
- [ ] Read receipts
- [ ] Typing indicators
- [ ] User presence status
- [ ] Message search
- [ ] Theme persistence

### Phase 4 - Technical Improvements
- [ ] Redux for state management
- [ ] Backend API integration
- [ ] Message encryption
- [ ] Offline message caching
- [ ] Performance optimization
- [ ] Unit and integration tests

## 💡 Code Quality Features

### Inline Comments
Every component includes comments explaining:
- Component purpose and role
- State management logic
- User interaction flows
- Styling decisions
- Navigation patterns

### Best Practices Implemented
- ✅ Functional components with Hooks
- ✅ Proper state management with useState
- ✅ Effect hook for side effects (useEffect)
- ✅ Styled with StyleSheet for optimization
- ✅ Responsive design considerations
- ✅ Meaningful variable names
- ✅ Clean component separation

## 📱 Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| iOS | ✅ Supported | Requires Apple device or simulator |
| Android | ✅ Supported | Works on emulator and physical devices |
| Web | ✅ Supported | Via Expo web, limited features |

## 🤝 Contributing

When extending this project:
1. Follow the existing component structure
2. Add comments for new features
3. Keep component files under 200 lines if possible
4. Use consistent naming conventions
5. Test on multiple screen sizes

## 📚 Learning Resources

### React Native
- [React Native Official Docs](https://reactnative.dev/)
- [React Native Tutorial](https://reactnative.dev/docs/getting-started)

### React Navigation
- [React Navigation Docs](https://reactnavigation.org/)
- [Stack Navigator Guide](https://reactnavigation.org/docs/stack-navigator/)

### Expo
- [Expo Documentation](https://docs.expo.dev/)
- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)

## 📝 Notes for Developers

### Adding New Colors
To add a new background color option:
1. Edit the `colors` array in Screen1.js
2. Add hex color code to array
3. No other changes needed - color circles render dynamically

### Customizing the Background Image
1. Replace `Background-Image.png` in assets folder
2. Or modify the import path in Screen1.js

### Modifying Screen2 Layout
The Screen2 currently has placeholder text. To add chat functionality:
1. Import FlatList for message display
2. Add message state management
3. Create message input component
4. Implement message sending logic

## ⚙️ Configuration

### app.json (Expo Configuration)
- App name, version, and description
- Icon and splash screen settings
- Permissions configuration
- Platform-specific settings

### package.json
- Project metadata
- Script commands
- Dependency versions
- Project privacy setting

## 🐛 Troubleshooting

### Issue: "Cannot find module" errors
**Solution**: Run `npm install` to install missing dependencies

### Issue: App won't launch
**Solution**: 
- Clear cache: `npm start -- --clear`
- Check Node version: `node --version` (should be v14+)
- Restart Expo: Stop terminal and run `npm start` again

### Issue: Colors not appearing correctly
**Solution**: Ensure hex color codes are valid (7 characters including #)

### Issue: Navigation not working
**Solution**: Verify route names match exactly (case-sensitive)

## 📄 License

This project is part of the CareerFoundry Full-Stack Immersion course.

---

**Project Status**: ✅ Initial setup complete - Ready for feature development

**Last Updated**: January 20, 2026

**Created by**: Jordan (CareerFoundry Student)
