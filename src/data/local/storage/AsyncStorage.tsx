import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_AUTH_TOKEN = '@KEY_AUTH_TOKEN'
const KET_IS_LOGGED_IN = '@KET_IS_LOGGED_IN'

export const setAuthToken = async (value: string) => {
    try {
        setIsLogged('true')
        await AsyncStorage.setItem(KEY_AUTH_TOKEN, value)
    } catch (e) {
        console.log(e)
    }
}

export const getAuthToken = async () => {
    try {
        return await AsyncStorage.getItem(KEY_AUTH_TOKEN)
    } catch (e) {
        console.log("getAuthToken ERROR", e);
    }
}

export const setIsLogged = async (value:string) =>{
    try {
        await AsyncStorage.setItem(KET_IS_LOGGED_IN, value)
    } catch (e) {
        console.log(e)
    }
}
export const isLogged = async () => {
    try {
        return await AsyncStorage.getItem(KET_IS_LOGGED_IN)
    } catch (e) {
        console.log("isLogged ERROR", e);
    }
}
