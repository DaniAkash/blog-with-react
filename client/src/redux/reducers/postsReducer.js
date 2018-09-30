import initialState from '../store/initialState';
import actionTypes from '../actionTypes/actionTypes';

const postsReducer = (
    state = initialState.posts, 
    action) => {
        
    switch(action.type) {
        case actionTypes.GET_POSTS:
            return action.payload.posts;

        default:
            return state;
    }
}

export default postsReducer;