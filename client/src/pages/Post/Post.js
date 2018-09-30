import React, {
    Component,
} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import apiCall from '../../services/apiCall';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorMessage from '../../CommonComponents/ErrorMessage';
import { connect } from 'react-redux';

class Post extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div className={`posts-container container`}>
                {
                    this.props.loading
                    ?
                    <LoadingIndicator/>
                    :
                    null
                }
                {
                    this.props.hasError
                    ?
                        <ErrorMessage 
                            title={'Error!'} 
                            message={'Unable to retrieve posts!'} 
                        />
                    :
                        null
                }
                {
                    this.props.post
                    ?
                        <div>
                            <h2>{this.props.post.title}</h2>
                            <p>{this.props.post.author}</p>
                            <p>{this.props.post.content}</p>
                        </div>
                    :
                        null
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.find(
            post => post.id === ownProps.match.params.id
        ),
        loading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError,
    }
};

export default withRouter(
    connect(mapStateToProps)(Post)
);