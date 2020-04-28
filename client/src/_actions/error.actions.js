import { errorConstants } from '../_constants';

export const returnErrors = (msg, status, id = null) => {
    console.log('status: ', status)
    return {
        type: errorConstants.GET_ERRORS,
        payload: { msg, status, id }
    };
};

export const clearErrors = () => {
    return {
        type: errorConstants.CLEAR_ERRORS
    };
};