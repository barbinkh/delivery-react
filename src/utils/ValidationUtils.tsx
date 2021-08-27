
export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (text.length > 0 && reg.test(text) === false) {
        return "Wrong email format"
    } else if (!!!text) {
        return "Email can not be blank"
    } else {
        return ""
    }
}

export function validateName(text) {
    return !!!text ? "Fullname can not be blank" : ""
}

export function validatePassword(text) {
    return text.length < 6 ? "Password should contain at least 6 characters" : ""
}

export function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword.length < 6) {
        return "Password should contain at least 6 characters"
    } else if (password !== confirmPassword) {
        return "Password and confirm password don't match"
    } else {
        return ""
    }
}