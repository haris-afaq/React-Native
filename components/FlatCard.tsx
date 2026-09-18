import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style = {styles.headingText}>
        Flat Card</Text>
        <View style = {styles.container}>
          
          <View style= {[styles.card, styles.cardOne]}>
            <Text style= {styles.bodyText}>Red</Text>
          </View>
         <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.bodyText}>Green</Text>
         </View>
         <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.bodyText}>
            Blue
          </Text>
         </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Text Style
  headingText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000",
    paddingHorizontal: 10,
  },
  bodyText:{
    fontSize: 15,
    fontWeight: 'semibold',
    color: "#FFFFFF",
    alignItems : "center"
  },
  container:{
    flex: 1,
    flexDirection: "row",
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
  },
  cardOne:{
    backgroundColor: "#EF5354",
  },
  cardTwo:{
    backgroundColor: "#50DBB4",
  },
  cardThree:{
    backgroundColor: "#5DA3FA"
  }

})