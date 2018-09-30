import actions from '../actionTypes/actionTypes';

export const getPosts = () => {

    const posts = [
        {
            title: 'My post 1',
        },
        {
            title: 'My post 2',
        },
        {
            title: 'My post 3',
        }
    ];

    return {
        type: actions.GET_POSTS,
        payload: { posts },
    };
};
