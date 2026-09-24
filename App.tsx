import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import TrendingStars from './components/ImageCard'

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <ScrollView>
        <View>
          <FlatCard />
        <ElevatedCards />
        </View>
        <TrendingStars></TrendingStars>
      </ScrollView>
      </View>
    
    </SafeAreaProvider>
  )
}