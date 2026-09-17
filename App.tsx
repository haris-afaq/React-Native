import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  
} from "react-native"

function App(){
  return (
    <SafeAreaView>
    <View>
      <Text>
        Text here!
      </Text>

      <Image
      source={require("./assets/logo.png")}
      style={{width: 100, height: 100,}}
      >

      </Image>
    </View>
  </SafeAreaView>
  )
}


export default App;