import React, {Component} from 'react';
import {
    Text
} from 'react-native';
import navigationOptions from '../../CommonComponents/CommonHeader';

class NewPost extends Component {

    static navigationOptions = ({navigation}) => navigationOptions({navigation, title: "New Post"});

    render() {
        return (
            <Text>NewPost</Text>
        );
    }
}

export default NewPost;