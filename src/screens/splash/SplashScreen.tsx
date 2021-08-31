import { StackActions } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { isLogged } from "../../data/local/storage/AsyncStorage";

export const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            isLogged().then(value => {
                if (value !== null && value === 'true') {
                    navigation.dispatch(StackActions.replace('Login'))
                } else {
                    navigation.dispatch(StackActions.replace('Login'))
                }
            })
        }, 2000);

    })


    return (
        <SafeAreaView style={{ backgroundColor: "#ebca28", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
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