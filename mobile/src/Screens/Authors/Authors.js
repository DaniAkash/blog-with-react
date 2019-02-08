import React, {Component} from 'react';
import {
    Text
} from 'react-native';
import navigationOptions from '../../CommonComponents/CommonHeader';

class Authors extends Component {

    static navigationOptions = ({navigation}) => navigationOptions({navigation, title: "Authors"});

    render() {
        return (
            <Text>Authors</Text>
        );
    }
}

export default Authors;