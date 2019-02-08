import React, {Component} from 'react';
import {
    Text
} from 'react-native';
import navigationOptions from '../../CommonComponents/CommonHeader';

class NewPost extends Component {

    static navigationOptions = navigationOptions;

    render() {
        return (
            <Text>NewPost</Text>
        );
    }
}

export default NewPost;