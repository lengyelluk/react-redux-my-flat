import axios from 'axios';
import { cardConstants } from '../_constants';

export const getCards = () => dispatch => {
    dispatch(setCardsLoading());
    axios
        .get('/cards')
        .then(res => 
            dispatch({
                type: cardConstants.GET_CARDS,
                payload: res.data
            }))
};

export const addCard = card => dispatch => {
    axios
        .post('/cards', card)
        .then(res => 
            dispatch({
                type: cardConstants.ADD_CARD,
                payload: res.data
            }))

};

export const setCardsLoading = () => {
    return {
        type: cardConstants.CARDS_LOADING
    }
}