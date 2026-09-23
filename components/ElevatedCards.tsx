import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style= {styles.sectionHeading}>Elevated Cards</Text>
      <ScrollView horizontal= {true} style= {styles.container}>
        <View style={[styles.card, styles.cardElevation]}>
  <Text style={styles.bodyText}>1</Text>
</View>,
<View style={[styles.card, styles.cardElevation]}>
  <Text style={styles.bodyText}>1</Text>
</View>,
<View style={[styles.card, styles.cardElevation]}>
  <Text style={styles.bodyText}>1</Text>
</View>,
<View style={[styles.card, styles.cardElevation]}>
  <Text style={styles.bodyText}>1</Text>
</View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeading:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    margin: 10,
  },
  bodyText:{
        fontSize: 12,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  container:{
    flex: 1
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    marginEnd: 10,
    marginStart: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  borderColor: "#5A5A5A",
  borderWidth: 3
},
  cardElevation:{
    backgroundColor: "#000000",
    elevation: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    }
  }
})