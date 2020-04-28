import axios from 'axios';
import { imageConstants } from '../_constants';
import storage from 'localforage'
import { returnErrors } from '../_actions/error.actions';

export const getImages = () => async dispatch => {
    dispatch(setImagesLoading());
    const data = await axios.get('/cards');
    dispatch({
        type: imageConstants.GET_IMAGES,
        payload: data.data
        })
    }

export const getImage = (id) => async dispatch => {
    console.log('GET IMAGE action executed')
    const token = await storage.getItem('token');
    const config = { headers: {
        'x-auth-token': token
        }
    }
    //dispatch(setCardsLoading());
    const data = await axios.get(`/cards/${id}`, config);
    console.log('get card data', data);
    dispatch({
       type: imageConstants.GET_IMAGE,
       payload: data.data
        })
    }

export const addImage = image => async dispatch => {
    const token = await storage.getItem('token');
    console.log('token in addImage: ', token)
    const config = { headers: {
        'x-auth-token': token,
        'Content-Type': 'multipart/form-data'
        }
    }
    console.log('addImage in image.actions')
    console.log('image in image actions', image)
    axios
        .post('/images/cloudinary/upload/single', image, config)
        .then(res => 
            dispatch({
                type: imageConstants.ADD_IMAGE,
                payload: res.data 
        })
    )
    .catch(err => {
        dispatch({
            type: imageConstants.UPLOAD_FAIL,
            status: err.response.status
        });
    });
};

export const setImagesLoading = () => {
    return {
        type: imageConstants.IMAGES_LOADING
    }
}