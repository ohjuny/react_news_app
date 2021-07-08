import axios from 'axios';

const URL_SERV = "http://localhost:3004";

export const getPosts = async (prevState, page=1, order='desc', limit=6) => {
    try {
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: prevState.posts ? [...prevState.posts, ...response.data] : response.data,
            page: page,
            end: response.data.length === 0
        }
    }
    catch(error) {
        throw error;
    }
}

export const getPostByID = async (id) => {
    try {
        const response = await axios.get(`${URL_SERV}/posts/${id}`)
        return response.data
    }
    catch (error) {
        return '404'
    }
}

export const addNewsletter = async (data) => {
    try {
        const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`);

        if (!Array.isArray(findUser.data) || !findUser.data.length) {
            const response = await axios({
                method: 'POST',
                url: `${URL_SERV}/newsletter`,
                data: {
                    email: data.email
                }
            })

            return {
                newsletter: 'success',
                email: response.data
            }
        }
        else {
            return {
                newsletter: 'failed'
            }
        }

    }
    catch(error) {
        throw error;
    }
}