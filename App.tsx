import { SafeAreaView ,StyleSheet } from 'react-native'
import React from 'react'
import Dashboard from './src/components/screens/Dashboard'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard/>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
}
});