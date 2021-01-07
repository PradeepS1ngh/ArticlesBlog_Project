import React, { useReducer } from 'react'
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer'
import setAuthToken from '../../setAuthToken'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    CLEAR_ERROR,
    SET_ALERT,
    REMOVE_ALERT,
} from '../Types'


const AuthState = props => {
    const initialState = {
        token : localStorage.getItem('token'),
        isAuthenticated : false,
        user : '',
        error : null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Actions
    const UserRegister = async(user) => {
        const config = {
            header : {
                'content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/user/',user,config);
            console.log(res);
            dispatch({type : REGISTER_SUCCESS , payload : res.data})
            loadingUser();
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({type : REGISTER_FAIL , payload : error.response.data});
        }
    }

    const loadingUser = async() => {

        // Setting default header token
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auth/');
            dispatch({type:USER_LOADED , payload : res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR , paylaod : error})
        }
    }

    const loginUser = async(user) => {
        const config = {
            header : {
                'Content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/auth/',user,config);
            console.log(res.data);
            dispatch({type:LOGIN_SUCCESS , payload:res.data});
            loadingUser();
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({type:LOGIN_FAIL , payload:error.response.data.msg});
        }
    }

    const logoutUser = async() => {
        console.log('logout Clicked');
        dispatch({type:LOGOUT})
    }

    const clearError = () => {
        dispatch({type : CLEAR_ERROR});
    }


    return <AuthContext.Provider
        value={{
            token : state.token,
            isAuthenticated :state.isAuthenticated,
            user : state.user,
            error : state.error,
            UserRegister,
            loadingUser,
            clearError,
            loginUser,
            logoutUser
        }}
    >
        {props.children}
    </AuthContext.Provider>
}


export default AuthState;