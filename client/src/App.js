import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route 
          path={routes.home} 
          component={Home} 
        />
      </div>
    );
  }
}

export default App;
