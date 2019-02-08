import React from 'react';
import { 
  createDrawerNavigator, 
  createAppContainer 
} from 'react-navigation';
import Home from './src/Screens/Home/Home';
import Authors from './src/Screens/Authors/Authors';
import NewPost from './src/Screens/NewPost/NewPost';
import configureStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux';

const Drawer = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Authors: {
    screen: Authors
  },
  NewPost: {
    screen: NewPost
  }
});

const AppNavigator = createAppContainer(Drawer);

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;