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

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;