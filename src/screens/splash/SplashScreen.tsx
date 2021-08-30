import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate('Login');
    }, 2000);
    return (
        <SafeAreaView style={{backgroundColor:"#ebca28", width:"100%", height:"100%", alignItems:"center", justifyContent:"center"}}>
            <Text style={styles.text}>
                WELCOME 2 DeliveryApp
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
    }
})