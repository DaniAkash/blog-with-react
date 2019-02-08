import actionTypes from "../actionTypes/actionTypes";
import apiCall from "../../utils/apiCall";

export const getAllPosts = () => {

    return dispatch => {
        dispatch(postsApiCallStart());
        apiCall('posts')
            .then(response => {
                dispatch(getPosts(response));
                dispatch(postsApiCallSuccess());
            })
            .catch(error => {
                console.error(error);
                dispatch(postsApiCallFailure());
            })
    };
};

export const getPosts = posts => {
    return {
        type: actionTypes.GET_POSTS,
        payload: { posts },
    };
};

export const postsApiCallStart = () => {
    return {
        type: actionTypes.GET_POSTS_AJAX_CALL_START,
    };
};

export const postsApiCallSuccess = () => {
    return {
        type: actionTypes.GET_POSTS_AJAX_CALL_SUCCESS,
    };
};

export const postsApiCallFailure = () => {
    return {
        type: actionTypes.GET_POSTS_AJAX_CALL_FAILURE,
    };
};

export const addNewPost = (body) => {
    return dispatch => {

        dispatch(addPostApiCallStart());

        apiCall(`post`, 'POST', body)
            .then(() => {

                dispatch(addPostApiCallSuccess());
                dispatch(getAllPosts());

            })
            .catch(error => {

                dispatch(addPostApiCallFailure());

            });
    };
};

export const addPostApiCallStart = () => {
    return {
        type: actionTypes.ADD_POST_AJAX_CALL_START
    };
};

export const addPostApiCallSuccess = () => {
    return {
        type: actionTypes.ADD_POST_AJAX_CALL_SUCCESS
    };
};

export const addPostApiCallFailure = () => {
    return {
        type: actionTypes.ADD_POST_AJAX_CALL_FAILURE
    };
};