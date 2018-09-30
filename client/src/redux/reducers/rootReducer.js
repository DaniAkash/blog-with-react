import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import ajaxCallsReducer from './ajaxCallsReducer';
import authorsReducer from './authorsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    authors: authorsReducer,
    ajaxCalls: ajaxCallsReducer,
});

export default rootReducer;