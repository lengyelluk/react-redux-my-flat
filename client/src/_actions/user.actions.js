import axios from 'axios';
import { userConstants } from '../_constants';
import { returnErrors } from '../_actions/error.actions';
import history from './../history'

export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: userConstants.USER_LOADING });
    console.log('user.actions.js => loadUser')
    console.log(tokenConfig(getState))
    axios.get('/users/auth', tokenConfig(getState))
        .then(res => dispatch({
            type: userConstants.USER_LOADED,
            payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: userConstants.AUTH_ERROR
            });
        });
};

export const register = ({ username, email, password }) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log('user.actions.js => register')

    //body
    const body = JSON.stringify({ username, email, password });
    
    axios.post('/users/registration', body, config)
        .then(res => {dispatch({
            type: userConstants.REGISTER_SUCCESS,
            payload: res.data
        })
        history.push('/')
    })

        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: userConstants.REGISTER_FAIL
            });
        });
} 

export const login = ({ email, password } ) => dispatch => {
    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log('user.actions.js => login')

    //body
    const body = JSON.stringify({ email, password });
    
    axios.post('/users/login', body, config)
        .then(res => {dispatch({
            type: userConstants.LOGIN_SUCCESS,
            payload: res.data
        })
            history.push('/')
    })
            
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: userConstants.LOGIN_FAIL
            });
        });
};

export const logout = () => {
    console.log('user.actions.js => logout')
    history.push('/')
    return {
        type: userConstants.LOGOUT_SUCCESS
    };
};


//setup config/headers + token
export const tokenConfig = getState => {
    //get token from local storage
    const token = getState().auth.token;

    //prepare header
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    console.log('user.actions.js => tokenConfig')

    //if token add to header
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}