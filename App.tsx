import { SafeAreaView ,StyleSheet } from 'react-native'
import React from 'react'
import Dashboard from './src/components/screens/Dashboard'
import Project from './src/components/screens/Project';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Project/>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
}
});