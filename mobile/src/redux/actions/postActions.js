import actionTypes from "../actionTypes/actionTypes";

export const getAllPosts = () => {
    return {
        type: actionTypes.GET_POSTS,
        payload: [
            {
                "id": "487929f5-47bc-47af-864a-f570d2523f3e",
                "title": "support",
                "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
                "datetime": "1478674102",
                "author": "Valaria Claypool"
            },
        ],
    };
};