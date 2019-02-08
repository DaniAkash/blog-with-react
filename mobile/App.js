import { 
  createDrawerNavigator, 
  createAppContainer 
} from 'react-navigation';
import Home from './src/Screens/Home/Home';
import Authors from './src/Screens/Authors/Authors';
import NewPost from './src/Screens/NewPost/NewPost';

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

export default AppNavigator;