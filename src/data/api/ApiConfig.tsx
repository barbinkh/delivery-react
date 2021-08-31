import axios from "axios";
import base64 from 'react-native-base64'
import { getAuthToken } from "../local/storage/AsyncStorage";

const BASE_AUTH_CREDENTIALS = "fcaIvuX6nOCmkcflOZpPDJaL615WL8Pfgl4xQJgO:akZKYl2wsAsbLYbOIPDg863McNfzJskww2VPrTsbWMIdudgN3qhyg25PnuG2nlIL9tafAqEeqsb0g33MVPZeE9EZxeYJWKQcI5QvCM5bkN4jwv9s0WLSCLqtLnxTL4T4"

function getToken() {
  const result = getAuthToken().then()
  return result ? 'Bearer' + result : 'Basic ' + base64.encode(BASE_AUTH_CREDENTIALS)
}
const API = axios.create({
  baseURL: "http://wlapp.itcraftlab.com:1337/",
  timeout: 30000,
  headers: {
    'tenant': 'test',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

API.interceptors.request.use(
  async config => {
    const token = await getAuthToken()
    console.log("TOKEN ---->", token);
    console.log("TOKEN ---->", Boolean(
      token
    ));
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    } else {
      config.headers.Authorization = 'Basic ' + base64.encode(BASE_AUTH_CREDENTIALS)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);
export default API