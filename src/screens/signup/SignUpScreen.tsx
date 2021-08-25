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
    const usernameInputChange = (text) => {
        setValue({
            ...inputValue,
            fullname: text
        })
    }
    const emailInputChange = (text) => {
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

    const handleClick = () => {
        let message = ""
        if(!!!inputValue.fullname ){
            console.log('The Fullname field may not be blank.')
            message = message.concat('The Fullname field may not be blank.')
        }

        if (!!!inputValue.email) {
         message = message + 'Enter a valid email address.'
        }


        if(inputValue.password){

        }
        console.log(message)
        alert(message)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo} source={{ uri: "https://image.flaticon.com/icons/png/512/3027/3027212.png" }}></Image>
            <View style={styles.textInputContainer}>
                л
                <TextInput style={styles.textInput}
                    placeholder="Full Name"
                    onChangeText={(text) => usernameInputChange(text)}
                    defaultValue={inputValue.fullname}
                />

                <TextInput style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(text) => emailInputChange(text)}
                    defaultValue={inputValue.email}
                />
                <TextInput style={styles.textInput}
                    placeholder="Password"
                    onChangeText={(text) => passwordInputChange(text)}
                    defaultValue={inputValue.password} />

                <TextInput style={styles.textInput}
                    placeholder="Confirm Password"
                    onChangeText={(text) => confirmPasswordInputChange(text)}
                    defaultValue={inputValue.confirmPassword} />

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