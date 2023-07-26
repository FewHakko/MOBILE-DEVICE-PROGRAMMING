import { StatusBar } from 'expo-status-bar';

import Lab21 from './screens/Lab3_1'
import Lab22 from './screens/Lab3_2'

import { StyleSheet, Text, View } from 'react-native';




export default function App() {

  return (
    // <Lab21 />
    <Lab22 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
