import React, { JSX } from "react";

import{
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from "react-native"

import {SafeAreaProvider} from "react-native-safe-area-context"

function AppPro(): JSX.Element{

    // Using Color Scheme
    const isDarkTheme = useColorScheme() === "dark";

    return(
        <SafeAreaProvider>
            <View style={MyStyles.container}>
            <Text style={isDarkTheme? MyStyles.WhiteTextStyle: MyStyles.BlackTextStyle}>
                App1 tsx added
            </Text>
        </View>
        </SafeAreaProvider>
    );
}


// adding custom styles ti components
const MyStyles=  StyleSheet.create({
    container:{
        flex: 1,
        // Horizantally alignment
        alignItems: "center",
        // Vertically alignment
        justifyContent: "center"
    },

    // TextStyles

    WhiteTextStyle:{
        color: "#FFFFFF"
    },
    BlackTextStyle:{
        color: "#000000"
    }
    
})


export default AppPro;