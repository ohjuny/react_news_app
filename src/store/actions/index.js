import {
    GET_POSTS,
    GET_POST_BY_ID,
    CLEAR_POST_BY_ID,
    ADD_NEWSLETTER,
    CLEAR_USER
} from '../types';
import * as api from '../../api';

//////////
////////// POST
//////////

export const getPosts = (prevState, page, order, limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(prevState, page, order, limit)
})

export const getPostById = (id) => ({
    type: GET_POST_BY_ID,
    payload: api.getPostByID(id)
})

export const clearPostByID = (id) => ({
    type: CLEAR_POST_BY_ID,
    payload: {}
})

//////////
////////// USER
//////////

export const addNewsletter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
})

export const clearUser = () => ({
    type: CLEAR_USER,
    payload: {
        newsletter: 'done'
    }
})