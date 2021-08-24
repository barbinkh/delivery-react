import React, { useState } from "react";
import { Image, Text, TextInput, Button, StyleSheet, SafeAreaView, View, Alert } from 'react-native'
import { connect } from "react-redux";
import { login } from "../../redux/actions/LoginAction";

function Login(props) {
   const [usernameValue, setUsernameValue] = useState("test_user@gmail.com")
   const [paswordValue, setPasswordValue] = useState("qkmme@vEEW!8f5r")
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo} source={{ uri: "https://image.flaticon.com/icons/png/512/3027/3027212.png" }}></Image>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Email"
                    value = {usernameValue}
                    onChangeText={(text) => setUsernameValue(text)}
                />
                <TextInput style={styles.textInput}
                    placeholder="Password"
                    value = {paswordValue}
                    onChangeText={(text) => setPasswordValue(text)} />
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
                            onPress={() => props.login(usernameValue, paswordValue)}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default connect(null, { login })(Login)

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