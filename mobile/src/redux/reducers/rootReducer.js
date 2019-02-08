import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import ajaxCallsReducer from './ajaxCallsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    ajaxCalls: ajaxCallsReducer
});

export default rootReducer;