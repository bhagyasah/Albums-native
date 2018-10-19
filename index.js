// Import a library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
  <Text> Some Text </Text>
);

// Render it to the device
AppRegistry.registerComponent('helloworld', () => App);
