import actionTypes from "../actionTypes/actionTypes";
import apiCall from "../../utils/apiCall";

export const getAllPosts = () => {
    return dispatch => {
        apiCall('posts')
            .then(response => {
                dispatch(getPosts(response));
            })
            .catch(error => {
                console.error(error);
            })
    };
};

export const getPosts = posts => {
    return {
        type: actionTypes.GET_POSTS,
        payload: { posts },
    };
};
