import React from 'react';
import { 
  createDrawerNavigator, 
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import Home from './src/Screens/Home/Home';
import Authors from './src/Screens/Authors/Authors';
import NewPost from './src/Screens/NewPost/NewPost';
import configureStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux';

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

const Drawer = createDrawerNavigator({
  Home: {
    screen: createStackNavigator({
      HomeStack: {
        screen: Home
      }
    })
  },
  Authors: createStackNavigator({
    AuthorStack: {
      screen: Authors
    }
  }),
  NewPost: createStackNavigator({
    NewPostStack: {
      screen: NewPost
    }
  })
});

const AppNavigator = createAppContainer(Drawer);

const store = configureStore();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>
  );
};

export default App;