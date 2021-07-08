import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import NewsLetter from '../utils/newsletter'

import { getPostById, clearPostByID } from '../../store/actions';
import { showToast } from '../utils/tools'

const Post = (props) => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostById(props.match.params.id))
    }, [dispatch, props.match.params.id])

    useEffect(() => {
        if (post.post === '404') {
            showToast('ERROR', 'Post does not exist :(')
            props.history.push('/')
        }
    }, [post, props.history])

    useEffect(() => {
        return () => {
            dispatch(clearPostByID())
        }
    }, [dispatch])

    return (
        <>
            { post.post ?
            <div className="article_container">
                <h1>{ post.post.title }</h1>
                <div
                    style={{ background:`url(${post.post.imagexl})` }}
                    className="image"
                ></div>
                <div className="author">
                    <span>{ post.post.author } - </span>
                    <Moment format="DD MMMM">
                        { post.post.createdAt }
                    </Moment>
                </div>
                <div
                    className="mt-3 content"
                    dangerouslySetInnerHTML={
                        {__html: post.post.content}
                    }
                >
                </div>
            </div>
            : null }
            <NewsLetter />
        </>
    )
}

export default Post;