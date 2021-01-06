import React, { useReducer } from 'react'
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer'

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

        console.log(user);
        const config = {
            header : {
                'content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/user/',user,config);
            console.log(res);
            dispatch({type : REGISTER_SUCCESS , payload : res.data})
            isloading();
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({type : REGISTER_FAIL , payload : error.response.data});
        }
    }

    const isloading = async() => {

        // Setting default header token
        if(localStorage.token){
            axios.defaults.headers.common['x-auth-token'] = localStorage.token;
        }else{
            delete axios.defaults.headers.common['x-auth-token'];
        }

        try {
            const res = await axios.get('/api/auth/');
            dispatch({type:USER_LOADED , payload : res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR , paylaod : error})
        }
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
            isloading,
            clearError,
        }}
    >
        {props.children}
    </AuthContext.Provider>
}


export default AuthState;