import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorMessage from '../../CommonComponents/ErrorMessage';
import apiCall from '../../services/apiCall';
import routes from '../../routes';
import {connect} from 'react-redux';

class Authors extends Component {

    render() {
        return (
            <div className={`container`}>
                <h2>Authors</h2>
                {
                    this.props.loading
                        ?
                        <LoadingIndicator />
                        :
                        null
                }
                {
                    this.props.hasError
                        ?
                        <ErrorMessage title={'Error!'} message={'Unable to retrieve Author List!'} />
                        :
                        null
                }
                <ul className={`list-group`}>
                    {
                        this.props.authors.map((author, index) =>
                            <li className={`list-group-item`} key={index}>
                                <NavLink to={routes.author.replace(':authorname', author)}>{author}</NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      authors: state.authors,
      loading: state.ajaxCalls.getAuthors.loading,
      hasError: state.ajaxCalls.getAuthors.hasError,
    };
  }
  
  export default connect(mapStateToProps)(Authors);
