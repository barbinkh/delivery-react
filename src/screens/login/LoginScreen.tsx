import React from "react";
import { Image, Text, TextInput, Button, StyleSheet, SafeAreaView, View, Alert } from 'react-native'
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../redux/actions/LoginAction";

const Login = (login) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo} source={{ uri: "https://image.flaticon.com/icons/png/512/3027/3027212.png" }}></Image>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder="Email"></TextInput>
                <TextInput style={styles.textInput} placeholder="Password"></TextInput>
                <Text style={{
                    alignSelf: "flex-end",
                    marginEnd: 16,
                }}>Forgot Password?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={[{ width: "50%", margin: 10 }]}>
                        <Button
                            title="SIGN UP"
                            onPress={() => { }}
                        />
                    </View>
                    <View style={[{ width: "50%", margin: 10 }]}>
                        <Button
                            title="LOGIN"
                            onPress={() => login()}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default connect(null, login)(Login)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#ebca28"
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    textInputContainer: {
        marginTop: 40,
        marginStart: 16,
        marginEnd: 16,
        backgroundColor: "#00BCD4",
        height: 400,
        borderRadius: 10,
    },
    imageLogo: {
        marginTop: 100,
        height: 120,
        width: 120,
        alignSelf: 'center',
    },
    buttonsContainer: {
        marginStart: 24,
        marginEnd: 24,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})