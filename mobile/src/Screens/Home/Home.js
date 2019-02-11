import React, {Component} from 'react';
import {
    FlatList,
    PermissionsAndroid,
    Platform
} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../redux/actions/postActions';
import Post from '../../CommonComponents/Post';
import navigationOptions from '../../CommonComponents/CommonHeader';

async function requestLocationPermission(success, failure) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'We need device location!',
          message: "we are using location for an experiment",
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // use the location
          success();
      } else {
        // cannot use the location
        failure();
      }
    } catch (err) {
      console.warn(err);
    }
  }

class Home extends Component {

    static navigationOptions = ({navigation}) => navigationOptions({navigation, title: "Home"});

    componentDidMount() {
        this.props.postActions.getAllPosts();
        // if(Platform.OS === "android") {
        //     requestLocationPermission(this.getLocation, () => {
        //         alert('unable to get location');
        //     });
        // } else {
        //     navigator.geolocation.requestAuthorization(); // ask permission in iOS
        // }
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((data) => {
            alert(data);
        });
    };

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => {
        const clickAction = () => null;
        return (
            <Post 
                clickAction={clickAction}
                title={item.title}
                author={item.author}
                content={item.content}
            />
        )
    };

    render() {
        return (
            <FlatList
                data={this.props.posts}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshing={this.props.loading}
                onRefresh={() => {
                    this.props.postActions.getAllPosts();
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postActions: bindActionCreators(postActions, dispatch),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Home);