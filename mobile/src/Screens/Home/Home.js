import React, {Component} from 'react';
import {
    Text
} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../redux/actions/postActions';

class Home extends Component {

    componentDidMount() {
        this.props.postActions.getAllPosts();
    }

    render() {
        return (
            <Text>Home</Text>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postActions: bindActionCreators(postActions, dispatch),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Home);