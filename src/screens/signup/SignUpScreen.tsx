import { connect } from "react-redux";
import React from "react";
import { useState } from "react";
import { SafeAreaView, Image, View, TextInput, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from "react-native"
import { signUp } from "../../redux/actions/SignUpActions";
import { validateEmail, validateName, validatePassword, validateConfirmPassword } from "../../utils/ValidationUtils"
import { useEffect } from "react";
import { StackActions } from "@react-navigation/native";


function SingUp(props) {
    const loading = props.loading
    const success = props.success

    const [inputValue, setValue] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setError] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        isValid: false
    })

    const usernameInputChange = (text) => {
        setError({
            ...errors,
            nameError: validateName(text)
        })
        setValue({
            ...inputValue,
            fullname: text
        })
    }
    const emailInputChange = (text) => {
        setError({
            ...errors,
            emailError: validateEmail(text)
        })
        setValue({
            ...inputValue,
            email: text
        })
    }

    const passwordInputChange = (text) => {
        setError({
            ...errors,
            passwordError: validatePassword(text)
        })
        setValue({
            ...inputValue,
            password: text
        })
    }

    const confirmPasswordInputChange = (text) => {
        setValue({
            ...inputValue,
            confirmPassword: text
        })
        setError({
            ...errors,
            confirmPasswordError: validateConfirmPassword(inputValue.password, text)
        })
    }

    const handleClick = () => {
        if (!!!(errors.confirmPasswordError && errors.emailError && errors.nameError && errors.passwordError)) {

            props.signUp({ fullname: inputValue.fullname, email: inputValue.email, password: inputValue.password, confirmPassword: inputValue.confirmPassword })
        }
    }

    useEffect(() => {
        if (success) {
            props.navigation.dispatch(StackActions.replace('Main'))
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={"position"}>
                <Image style={styles.imageLogo} source={{ uri: "https://image.flaticon.com/icons/png/512/3027/3027212.png" }}></Image>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                        placeholder="Full Name"
                        onChangeText={(text) => usernameInputChange(text)}
                        defaultValue={inputValue.fullname} />
                    {<Text style={styles.error}>{errors.nameError}</Text>}
                    <TextInput style={styles.textInput}
                        placeholder="Email"
                        onChangeText={(text) => emailInputChange(text)}
                        defaultValue={inputValue.email} />
                    {<Text style={styles.error}>{errors.emailError}</Text>}

                    <TextInput secureTextEntry={true} style={styles.textInput}
                        placeholder="Password"
                        onChangeText={(text) => passwordInputChange(text)}
                        defaultValue={inputValue.password} />
                    {<Text style={styles.error}>{errors.passwordError}</Text>}

                    <TextInput secureTextEntry={true} style={styles.textInput}
                        placeholder="Confirm Password"
                        onChangeText={(text) => confirmPasswordInputChange(text)}
                        defaultValue={inputValue.confirmPassword} />
                    {<Text style={styles.error}>{errors.confirmPasswordError}</Text>}

                    <View style={styles.buttonsContainer}>
                        <View>
                            <TouchableOpacity>
                                <Button
                                    title="CREATE ACCOUNT"
                                    onPress={() => handleClick()}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {loading && <ActivityIndicator size="large" color="#00ff00" />}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
function mapStateToProps(state) {
    return { loading: state.app.loading, success: state.signup.success }
}
export default connect(mapStateToProps, { signUp })(SingUp)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#ebca28"
    },
    textInput: {
        height: 40,
        marginTop: 6,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 5,
        borderColor: "#c7c7c7",
        backgroundColor: "#fff"
    },
    textInputContainer: {
        marginTop: 40,
        marginStart: 16,
        marginEnd: 16,
        paddingStart: 12,
        paddingEnd: 12,
        paddingBottom: 12,
        paddingTop: 20,
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
        marginStart: 16,
        marginEnd: 16,
        marginTop: 16,
        justifyContent: 'space-between',
    },
    error: {
        padding: 4,
        fontSize: 12,
        color: '#ff0000'
    }

})