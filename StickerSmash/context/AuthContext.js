import React, { useEffect, useContext, createContext, useState, useRef } from 'react'
import * as SecureStore from 'expo-secure-store'
import axios from "axios";

const TOKEN_KEY = 'jwt';
const EMAIL_KEY = 'user-email';
export const API_URL = 'https://web.newwell.app'
const AuthContext = createContext({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [authState, setAuthState] = useState({
        token: null,
        email:null,
        authenticated: null
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedInRef = useRef(false);
    isLoggedInRef.current = isLoggedIn

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            const _email = await SecureStore.getItemAsync(EMAIL_KEY)
            console.log('TOKEN==>', token)
            if (token && _email) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setIsLoggedIn(true)
                isLoggedInRef.current = true
                setAuthState({
                    token: token,
                    email:_email,
                    authenticated: true
                });

            }

        }
        loadToken()


    }, [isLoggedIn])

    const register = async (email, password) => {
        try {
            return await axios.post(`${API_URL}/api/add-auth-user`, { email, password })
        } catch (e) {
            return { error: true, msg: (e).response.data.msg }
        }
    }

    const login = async (email, password) => {
        try {
            const result = await axios.post(`${API_URL}/api/auth/jwt-signin`, { email, password }).then(async response => {
                console.log('results', response.data)
                if (response?.data?.jwt) {
                    const result1 = await axios.post(`${API_URL}/api/send-otp`, { email })

                    return response?.data;

                }
                return { error: true }
            })



        } catch (e) {
            return { error: true, msg: (e).response.data.msg }
        }
    }
    const verifyOtp = async (email, code) => {
        try {
            console.log('otp', email, code)
            const otp = parseInt(code)
            const result = await axios.post(`${API_URL}/api/verify-otp`, { otp, email }).then(async response => {

                if (response.data.jwt) {


                    setIsLoggedIn(true)
                    setAuthState({
                        token: response.data.jwt,
                        email:email,
                        authenticated: true
                    });
                    console.log('auth', authState)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;
                    await SecureStore.setItemAsync(TOKEN_KEY, response.data.jwt)
                    await SecureStore.setItemAsync(EMAIL_KEY, email)
                    return response;

                }
                return { error: true }
            }

            )




        } catch (e) {
            console.log('error', e)
            return { error: true, msg: (e).response.data.msg }
        }
    }
    const fetchPersonalInfo = async (email, code) => {
        try {
            console.log('otp', email, code)
            const otp = parseInt(code)
            const result = await axios.post(`${API_URL}/api/api/get-personal-info`, { email }).then(async response => {
                console.log('response',response)

                // if (response.data.jwt) {


                //     setIsLoggedIn(true)
                //     setAuthState({
                //         token: response.data.jwt,
                //         authenticated: true
                //     });
                //     console.log('auth', authState)
                //     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;
                //     await SecureStore.setItemAsync(TOKEN_KEY, response.data.jwt)
                //     return response;

                // }
                // return { error: true }
            }

            )




        } catch (e) {
            console.log('error', e)
            return { error: true, msg: (e).response.data.msg }
        }
    }
    const logout = async (email, password) => {
        await SecureStore.deleteItemAsync(TOKEN_KEY)
        axios.defaults.headers.common['Authorization'] = '';
        setIsLoggedIn(false)
        setAuthState({
            token: null,
            authenticated: false
        });
    }
    const value = {
        onRegister: register,
        onLogin: login,
        verifyOtp,
        fetchPersonalInfo,
        onLogut: logout,
        isLoggedIn,
        authState,
        isLoggedInRef,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}