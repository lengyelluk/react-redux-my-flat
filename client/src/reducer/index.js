import { combineReducers } from 'redux'

import config from './config'
import card from './card';
import auth from './auth';
import error from './error';

export default combineReducers({
    config: config,
    card: card,
    auth: auth,
    error: error
})
