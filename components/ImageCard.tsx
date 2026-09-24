import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TrendingStars() {
  return (
    <View>
        <Text style={styles.heading1}>Underworld Don</Text>
        <View style={[styles.card, styles.cardElevated]}>
           
            <Image 
            style = {styles.cardImage}
            source={{
                uri: 'https://i.pinimg.com/736x/74/18/07/741807352b34801c1029d14702b34728.jpg'
            }}
            >
                
            </Image>
             <View style={styles.cardBody}>
                <Text style={styles.nameText}>JOHN THE DON</Text>
                <Text style={styles.descriptionText}>
                    John the don is self-proclaimed criminal mastermind and the main antagonistci from the animated indian television series 'Motu Patlu'
                </Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading1: {
    fontSize: 20,
    fontWeight: '500',
    color: 'green',
    margin: 10,
  },
  nameText:{
    fontSize: 15,
    fontWeight: "bold",
    color: "blue",
    marginHorizontal: 8,
  },
  descriptionText:{
     fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    color: "grey",
    marginHorizontal: 8,
  },

  card: {},
  cardBody:{},

  cardElevated: {
    shadowOffset:{
        width:4,
        height: 4, 
    }
  },

  cardImage: {
    margin: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 250,
    
  },
})