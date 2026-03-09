/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Greeting from './src/components/Greeting';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaProvider>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <AppContent />
    // </SafeAreaProvider>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Hello React Native!!</Text>
    //   <Text style={styles.subtitle}>with TypeScript 🚀</Text>
    // </View>
     <ScrollView style={styles.container}>
      <Greeting name="Anna" age={25} />
      <Greeting name="Piotr" isVip={true} />
      <Greeting name="Kasia" age={30} isVip={true} />
      <Greeting name="Jan" />
    </ScrollView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 8,
//   },
// });

export default App;
