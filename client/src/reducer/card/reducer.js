import storage from 'localforage'
import { cardConstants } from '../../_constants'
import uuid from 'uuid'

const initialState = {
    cards: [],
    loading: false
}
 

export default function(state = initialState, action) {
    switch(action.type) {
        case cardConstants.GET_CARDS:
            console.log('reducer payload', action.payload)
            return {
                cards: action.payload,
                loading: false
            }
        case cardConstants.GET_CARD:
            console.log('GET CARD reducer', action.payload)
            return {
                card: action.payload,
                loading: false
            }
        case cardConstants.ADD_CARD:
            return {
                ...state,
                //cards: [action.payload, ...state.cards]
            }
        case cardConstants.CARDS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}