import { combineReducers } from 'redux';

import post from './postReducer';
import user from './userReducer';

const Reducers = combineReducers({
    post,
    user
});

export default Reducers;