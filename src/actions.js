import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_PROFILE_PENDING,
    REQUEST_PROFILE_SUCCESS,
    REQUEST_PROFILE_FAILED
} from './constants';

export const searchProfile = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
    })

export const requestProfile = () => (dispatch) => {
    //dispatch before request
    dispatch({type: REQUEST_PROFILE_PENDING});
    //request
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(profile => dispatch({type: REQUEST_PROFILE_SUCCESS, payload: profile}))
    .catch(error => dispatch({type: REQUEST_PROFILE_FAILED, payload: error}))
}