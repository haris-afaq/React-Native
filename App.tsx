import { View, Text, ScrollView } from 'react-native'

import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <FlatCard/>,
        <ElevatedCards/>
      </ScrollView>
      
    </SafeAreaProvider>
  )
}