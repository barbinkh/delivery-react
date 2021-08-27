import React, { useState } from "react";
import { Image, Text, TextInput, Button, StyleSheet, SafeAreaView, View, Alert, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { login } from "../../redux/actions/LoginAction";

function Login(props) {
    const success = props.success
    const [inputValue, setValue] = useState({
        username: "barbinkh@yopmail.com",
        password: "123456" //qkmme@vEEW!8f5r
    })
    const usernameInputChange = (text) => {
        setValue({
            ...inputValue,
            username: text
        })
    }
    const passwordInputChange = (text) => {
        setValue({
            ...inputValue,
            password: text
        })
    }
    if (success) {
        props.history.push("/main")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo} source={{ uri: "https://image.flaticon.com/icons/png/512/3027/3027212.png" }}></Image>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(text) => usernameInputChange(text)}
                    defaultValue={inputValue.username}
                />
                <TextInput style={styles.textInput}
                    placeholder="Password"
                    onChangeText={(text) => passwordInputChange(text)}
                    defaultValue={inputValue.password} />
                <Text style={{
                    alignSelf: "flex-end",
                    marginEnd: 16,
                }}>Forgot Password?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={[{ width: "50%", margin: 10 }]}>
                        <Button
                            title="SIGN UP"
                            onPress={() => { props.history.push("/signup") }}
                        />
                    </View>
                    <View style={[{ width: "50%", margin: 10 }]}>
                        <TouchableOpacity>
                            <Button
                                title="LOGIN"
                                onPress={() => props.login(inputValue.username, inputValue.password)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return { success: state.login.success }
}

export default connect(
    mapStateToProps,
    { login })(Login)

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