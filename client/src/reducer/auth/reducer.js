import { userConstants } from '../../_constants/user.constants';
import { persistReducer } from 'redux-persist'
import storage from 'localforage'

const initialState = {
    token: storage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export function selectIsAuthenticated(state) {
    return state && state.auth && state.auth.isAuthenticated
}

export function getUser(state) {
    if(selectIsAuthenticated(state)) {
       return state.auth.user.username
   }
}

export default persistReducer({
    blacklist: [],
    key: 'authentication',
    storage: storage,
    version: 1
}, function(state = initialState, action) {
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
            storage.setItem('token', action.payload.token);
            storage.setItem('username', action.payload.user.username);
            storage.setItem('email', action.payload.user.email);
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
            storage.removeItem('token');
            storage.removeItem('username');
            storage.removeItem('email');
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
})
