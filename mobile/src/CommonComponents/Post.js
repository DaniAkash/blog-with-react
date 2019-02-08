import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const Post = ({clickAction, title, author, content}) => {
    return (
        <TouchableOpacity onPress={clickAction} activeOpacity={0.8} style={styles.postsContainer}>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.authorName}>{author}</Text>
            <Text style={styles.postText}>{content}</Text>
        </TouchableOpacity>
    );
};

Post.propTypes = {
    clickAction: PropTypes.func.isRequired, 
    title: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    postsContainer: {
        margin: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: "silver",
        padding: 16,
        backgroundColor: 'white'
    },
    postTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    },
    authorName: {
        paddingVertical: 8,
        fontSize: 16,
        color: 'black',
    },
    postText: {

    }
});

export default Post;