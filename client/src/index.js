import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * imports for Redux
 */
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

/**
 * Imports for redux persist
 */
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
