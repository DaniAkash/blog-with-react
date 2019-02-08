import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState
    );
};

export default configureStore;