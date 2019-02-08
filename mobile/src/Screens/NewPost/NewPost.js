import React, {Component} from 'react';
import {
    ScrollView,
    View,
    TextInput,
    Button,
    Text
} from 'react-native';
import navigationOptions from '../../CommonComponents/CommonHeader';
import uuidv4 from 'uuid/v4';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../redux/actions/postActions';

class NewPost extends Component {

    static navigationOptions = ({navigation}) => navigationOptions({navigation, title: "New Post"});

    state = {
        title: "",
        author: "",
        content: "",
    };
    _title = React.createRef();
    _author = React.createRef();
    _content = React.createRef();

    submit = () => {
        const {title, author, content} = this.state;
        if(title && author && content) {
            const date = new Date();
            const epoch = (date.getTime()/1000).toFixed(0).toString();
            const body = {
                id: uuidv4(),
                title,
                author,
                content,
                datetime: epoch
            };
            this.props.postActions.addNewPost(body, () => {
                this.setState({
                    title: "", 
                    author: "", 
                    content: ""
                });
                this.props.navigation.navigate('HomeStack');
            });
        } else {
            alert('Please fill in all the fields');
        }
    };

    render() {
        return (
            <ScrollView>
                <TextInput
                    placeholder={'Post Title'}
                    value={this.state.title}
                    onChangeText={(title) => this.setState({title})}
                    ref={this._title}
                    onSubmitEditing={() => {
                        this._author.current.focus();
                    }}
                    returnKeyType={'next'}
                />
                <TextInput
                    placeholder={'Author'}
                    value={this.state.author}
                    onChangeText={(author) => this.setState({author})}
                    ref={this._author}
                    onSubmitEditing={() => {
                        this._content.current.focus();
                    }}
                    returnKeyType={'next'}
                />
                <TextInput
                    placeholder={'Content'}
                    multiline={true}
                    value={this.state.content}
                    onChangeText={(content) => this.setState({content})}
                    ref={this._content}
                    onSubmitEditing={() => {
                        
                    }}
                    returnKeyType={'done'}
                />

                <View style={{width: 100}}>
                {
                    this.props.loading
                    ?
                        <Text>Submitting...</Text>
                    :
                        <Button
                            onPress={()=> this.submit()}
                            title="Submit"
                            color="#841584"
                        />
                }
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.ajaxCalls.addPost.loading,
        hasError: state.ajaxCalls.addPost.hasError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postActions: bindActionCreators(postActions, dispatch),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewPost);