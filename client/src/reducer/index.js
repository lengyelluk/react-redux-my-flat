import { combineReducers } from 'redux'

import config from './config'
import card from './card';
import auth from './auth';
import error from './error';
import image from './image';

export default combineReducers({
    config: config,
    card: card,
    auth: auth,
    error: error,
    image: image
})
