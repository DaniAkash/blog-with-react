import React, {Component} from 'react';
import {
    ScrollView,
    View,
    TextInput,
    Button
} from 'react-native';
import navigationOptions from '../../CommonComponents/CommonHeader';

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
                        this.refs.current._author.focus();
                    }}
                    returnKeyType={'next'}
                />
                <TextInput
                    placeholder={'Author'}
                    value={this.state.author}
                    onChangeText={(author) => this.setState({author})}
                    ref={this._author}
                    onSubmitEditing={() => {
                        this.refs.current._content.focus();
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
                    <Button
                        onPress={()=> this.submit()}
                        title="Submit"
                        color="#841584"
                    />
                </View>
            </ScrollView>
        );
    }
}

export default NewPost;