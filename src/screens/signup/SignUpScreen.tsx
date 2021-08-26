import { connect } from "react-redux";
import React from "react";
import { useState } from "react";
import { SafeAreaView, Image, View, TextInput, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import { signUp } from "../../redux/actions/SignUpActions";


function SingUp(props) {
    const loading = props.loading

    const [inputValue, setValue] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "''"
    })

    const usernameInputChange = (text) => {
        validateName(text)
        setValue({
            ...inputValue,
            fullname: text
        })
    }
    const emailInputChange = (text) => {
        validateEmail(text)
        setValue({
            ...inputValue,
            email: text
        })
    }
    const passwordInputChange = (text) => {
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
    }

    const validateName = (text) => {
        setError({
            ...errors,
            nameError: !!!text ? "Fullname can not be blank" : ""
        })
    }

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (text.length > 0 && reg.test(text) === false) {
            setError({
                ...errors,
                emailError: "Wrong email format"
            })
        } else if (!!!text) {
            setError({
                ...errors,
                emailError: "Email can not be blank"
            })
        } else {
            setError({
                ...errors,
                emailError: ""
            })
        }
    }

    const handleClick = () => {


    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo} source={{ uri: "https://image.flaticon.com/icons/png/512/3027/3027212.png" }}></Image>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Full Name"
                    onChangeText={(text) => usernameInputChange(text)}
                    defaultValue={inputValue.fullname} />
                {<Text style ={styles.error}>{errors.nameError}</Text>}
                <TextInput style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(text) => emailInputChange(text)}
                    defaultValue={inputValue.email} />
                {<Text style ={styles.error}>{errors.emailError}</Text>}

                <TextInput style={styles.textInput}
                    placeholder="Password"
                    onChangeText={(text) => passwordInputChange(text)}
                    defaultValue={inputValue.password} />
                {<Text style ={styles.error}>{errors.passwordError}</Text>}

                <TextInput style={styles.textInput}
                    placeholder="Confirm Password"
                    onChangeText={(text) => confirmPasswordInputChange(text)}
                    defaultValue={inputValue.confirmPassword} />
                {<Text style ={styles.error}>{errors.confirmPasswordError}</Text>}

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
        </SafeAreaView>
    )
}
function mapStateToProps(state) {
    return { loading: state.app.loading }
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
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    textInputContainer: {
        marginTop: 40,
        marginStart: 16,
        marginEnd: 16,
        padding: 12,
        backgroundColor: "#00BCD4",
        height: 400,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {width: 100, height: -100}
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
    error:{
        padding:4,
        fontSize: 12,
        color: '#ff0000'
    }
    
})