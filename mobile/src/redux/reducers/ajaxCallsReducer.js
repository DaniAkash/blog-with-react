import initialState from '../store/initialState';
import actionTypes from '../actionTypes/actionTypes';

const ajaxCallsReducer = (state = initialState.ajaxCalls, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_AJAX_CALL_START:
            return {
                ...state,
                getAllPosts: {
                    loading: true,
                    hasError: false,
                },
            };

        case actionTypes.GET_POSTS_AJAX_CALL_SUCCESS:
            return {
                ...state,
                getAllPosts: {
                    loading: false,
                    hasError: false,
                },
            };

        case actionTypes.GET_POSTS_AJAX_CALL_FAILURE:
            return {
                ...state,
                getAllPosts: {
                    loading: false,
                    hasError: true,
                },
            };
        
        case actionTypes.ADD_POST_AJAX_CALL_START:
            return {
                ...state,
                addPost: {
                    loading: true,
                    hasError: false,
                },
            };

        case actionTypes.ADD_POST_AJAX_CALL_SUCCESS:
            return {
                ...state,
                addPost: {
                    loading: false,
                    hasError: false,
                },
            };

        case actionTypes.ADD_POST_AJAX_CALL_FAILURE:
            return {
                ...state,
                addPost: {
                    loading: false,
                    hasError: true,
                },
            };

        default:
            return state;
    }
};

export default ajaxCallsReducer;