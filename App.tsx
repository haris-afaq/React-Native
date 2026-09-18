import { View, Text, ScrollView } from 'react-native'

import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <FlatCard/>
      </ScrollView>
      
    </SafeAreaProvider>
  )
}