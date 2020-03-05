import { 
    CHANGE_SEARCH_FIELD,
} from './constants';

const initialStateSearchField = {
    searchField:``
};

export const searchProfile = (state=initialStateSearchField, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}