import { combineReducers } from 'redux'

import authentication from './authentication'
import config from './config'
import card from './card';

export default combineReducers({
    authentication: authentication,
    config: config,
    card: card
})
