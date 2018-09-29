import React, {
    Component,
} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import apiCall from '../../services/apiCall';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorMessage from '../../CommonComponents/ErrorMessage';

class Post extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    constructor() {
        super();

        this.state = {
            post: {},
            loading: false,
            hasError: false,
        };
    }    

    componentDidMount() {
        this.setState({
            loading: true,
        });
        apiCall(`post/${this.props.match.params.id}`)
        .then(data => {
            this.setState({
                loading: false,
                post: data,
                hasError: false,
            });
        })
        .catch(err => {
            this.setState({
                loading: false,
                hasError: true,
            });
        });
    }

    render() {
        return (
            <div className={`posts-container container`}>
                {
                    this.state.loading
                    ?
                    <LoadingIndicator/>
                    :
                    null
                }
                {
                    this.state.hasError
                    ?
                        <ErrorMessage 
                            title={'Error!'} 
                            message={'Unable to retrieve posts!'} 
                        />
                    :
                        null
                }
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.author}</p>
                <p>{this.state.post.content}</p>
            </div>
        )
    }
}

export default withRouter(Post);