import { userConstants } from '../operation';

export default function(state, action) {
    switch(action.type) {
        case userConstants.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case userConstants.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case userConstants.LOGIN_SUCCESS:
        case userConstants.REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case userConstants.AUTH_ERROR:
        case userConstants.LOGIN_FAIL:
        case userConstants.REGISTER_FAIL:
        case userConstants.LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}