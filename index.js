
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlumbList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header title="Albums" />
    <AlumbList />
  </View>
);

AppRegistry.registerComponent('helloworld', () => App);
