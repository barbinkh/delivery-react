import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_AUTH_TOKEN = "@KEY_AUTH_TOKEN"

export const setAuthToken = async (value: string) => {
    try {
        await AsyncStorage.setItem(KEY_AUTH_TOKEN, value)
    } catch (e) {
        console.log(e)
    }
}

export const getAuthToken = async () => {
    try {
        const value = await AsyncStorage.getItem(KEY_AUTH_TOKEN)
        if (value !== null) {
          return value
        }
    } catch (e) {
        // error reading value
    }

}