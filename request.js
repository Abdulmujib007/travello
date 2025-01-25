import axios from "axios";

const signUpBaseUrl = import.meta.env.VITE_SIGNUP_BASEURL;


const loginUrl = import.meta.env.VITE_LOGIN_BASEURL

export const addNewUser = async(userData) => {
     const response = await axios.post(signUpBaseUrl,userData)
     return response.data
}

export const userLogin =  async (loginData) => {
    const response = await axios.post(loginUrl,loginData)
    return response.data
}