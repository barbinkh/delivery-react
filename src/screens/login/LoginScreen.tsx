import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import { Image, Text, TextInput, Button, StyleSheet, SafeAreaView, View, Alert, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { login } from "../../redux/actions/LoginAction";
import tw from "tailwind-react-native-classnames"

function Login(props) {
    const success = props.success
    const [inputValue, setValue] = useState({
        username: "barbinkh@yopmail.com",
        password: "123456" //qkmme@vEEW!8f5r
    })
    AsyncStorage.clear()
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

    useEffect(() => {
        if (success) {
            props.navigation.dispatch(StackActions.replace('Main'))
        }
    });

    return (
        <SafeAreaView style={tw`w-full flex-1 bg-yellow-300`}>
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
                <Text style={tw`text-gray-900 self-end mr-4`}>
                    Forgot Password?
                    </Text>
                <View style={styles.buttonsContainer}>
                    <View style={[{ width: "50%", margin: 10 }]}>
                        <Button
                            title="SIGN UP"
                            onPress={() => { props.navigation.navigate('SignUp') }}
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
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