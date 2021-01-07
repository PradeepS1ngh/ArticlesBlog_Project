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
    REMOVE_ALERT
} from '../Types'


export default (state,action) => {
    switch (action.type) {
        case USER_LOADED :
            return {
                ...state,
                user : action.payload,
                isAuthenticated : true,
                error : null,
            }
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                error : null
            }
        case REGISTER_FAIL :
        case AUTH_ERROR :
        case LOGIN_FAIL :
        case LOGOUT :
            localStorage.removeItem('token');
            return{
                ...state,
                isAuthenticated : false,
                token: "",
                user : '',
                error : action.payload,
            }
        case CLEAR_ERROR :
            return {
                ...state,
                error : null
            }
        default:
            return state;
    }
}