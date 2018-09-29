import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home/Home';
import PropTypes from 'prop-types';

class App extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount() {
    if(this.props.location.pathname === '/') {
      this.props.history.replace(routes.home);
    }
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact
          path={routes.home} 
          component={Home} 
        />
      </div>
    );
  }
}

export default withRouter(App);
