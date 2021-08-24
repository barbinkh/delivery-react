import axios from "axios";
import base64 from 'react-native-base64'

const BASE_AUTH_CREDENTIALS = "fcaIvuX6nOCmkcflOZpPDJaL615WL8Pfgl4xQJgO:akZKYl2wsAsbLYbOIPDg863McNfzJskww2VPrTsbWMIdudgN3qhyg25PnuG2nlIL9tafAqEeqsb0g33MVPZeE9EZxeYJWKQcI5QvCM5bkN4jwv9s0WLSCLqtLnxTL4T4"
function getToken() {
  return  base64.encode(BASE_AUTH_CREDENTIALS)
}
export const API = axios.create({
    baseURL: "http://wlapp.itcraftlab.com:1337/",
    timeout: 30000,
    headers: {
        'tenant': 'test',
        'Authorization': 'Basic ' + getToken(),
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});