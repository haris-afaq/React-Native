
import React from "react";
import {
  View,
  Image,
  Button,
  Alert,
  StyleSheet,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  const showAlert = () => {
    Alert.alert("Hello!", "Button was pressed.");
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.image}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Button"
            onPress={showAlert}
          />
        </View>

      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },

  buttonContainer: {
    paddingHorizontal: 10,
  },
});

export default App;

