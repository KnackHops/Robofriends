import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_PROFILE_PENDING,
    REQUEST_PROFILE_SUCCESS,
    REQUEST_PROFILE_FAILED
} from './constants';

//searchProfile
const initialStateSearchProfile = {
    searchField:``
};

export const searchProfileReducer = (state=initialStateSearchProfile, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}
//requestProfile
const intitialStateRequestProfile = {
    profile: [],
    isPending: false,
    error: ''
}

export const requestProfileReducer = (state=intitialStateRequestProfile, action={}) => {
    switch(action.type) {
        case REQUEST_PROFILE_PENDING:
            return Object.assign({},state, {isPending: true})
        case REQUEST_PROFILE_SUCCESS:
            return Object.assign({}, state, {profile: action.payload, isPending: false});
        case REQUEST_PROFILE_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}