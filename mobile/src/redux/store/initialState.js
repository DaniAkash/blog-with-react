const initialState = {
    posts: [

    ],
    ajaxCalls: {
        getAllPosts: {
            loading: false,
            hasError: false,
        },
        addPost: {
            loading: false,
            hasError: false,
        },
    },
};

export default initialState;