import {
    ADD_NEWSLETTER,
    CLEAR_USER
} from '../types';


export default function userReducer(state={}, action) {
    switch (action.type) {
        case ADD_NEWSLETTER:
            return {...state, ...action.payload}

        case CLEAR_USER:
            return {...state, ...action.payload}

        default:
            return state;
    }
}