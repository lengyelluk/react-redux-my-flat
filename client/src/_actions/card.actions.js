import axios from 'axios';
import { cardConstants } from '../_constants';
import storage from 'localforage'

export const getCards = () => async dispatch => {
    dispatch(setCardsLoading());
    const data = await axios.get('/cards');
    dispatch({
        type: cardConstants.GET_CARDS,
        payload: data.data
        })
    }

export const getCard = (id) => async dispatch => {
    console.log('GET CARD executed')
    const token = await storage.getItem('token');
    const config = { headers: {
        'x-auth-token': token
        }
    }
    //dispatch(setCardsLoading());
    const data = await axios.get(`/cards/${id}`, config);
    console.log('get card data', data);
    dispatch({
       type: cardConstants.GET_CARD,
       payload: data.data
        })
    }

export const addCard = card => async dispatch => {
    const token = await storage.getItem('token');
    const config = { headers: {
        'x-auth-token': token
        }
    }
    axios
        .post('/cards', card, config)
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