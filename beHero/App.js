import  'intl'
import  'intl/local-data/jsonp/pt-Br'

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
export default function App() {
  return (
    <Routes/>
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
