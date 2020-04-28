import { imageConstants } from '../../_constants'

const initialState = {
    url: '',
    statusCode: '',
    loading: false,
    fileName: ''
}

export function getUrl(state) {
    if(state.url) {
       return state.url
   }
}
 

export default function(state = initialState, action) {
    switch(action.type) {
        case imageConstants.GET_IMAGES:
            console.log('reducer payload', action.payload)
            return {
                images: action.payload,
                loading: false
            }
        case imageConstants.GET_IMAGE:
            console.log('GET IMAGE reducer', action.payload)
            return {
                image: action.payload,
                loading: false
            }
        case imageConstants.ADD_IMAGE:
            console.log('ADD_IMAGE_state in reducer', action.payload)
            return {
                url: action.payload.payload.photo.url,
                //cards: [action.payload, ...state.cards]
            }
        case imageConstants.IMAGES_LOADING:
            return {
                ...state,
                loading: true
            }
        case imageConstants.UPLOAD_FAIL:
            return {
                statusCode: action.status,
                url: '',
                fileName: ''
            }
        default:
            return state
    }
}