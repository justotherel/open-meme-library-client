import {
    FETCH_ALL,
    FETCH,
    CREATE,
    LIKE,
    DELETE,
    CREATE_COMMENT,
    DELETE_COMMENT,
} from '../constants/actionTypes'

const postReducers = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case FETCH:
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post,
            )
        case CREATE:
            return [...posts, action.payload]
        case LIKE:
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post,
            )
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        case CREATE_COMMENT:
            return [
                ...posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post,
                ).comments,
                action.payload,
            ]
        case DELETE_COMMENT:
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post,
            )
        // ...posts
        //   .map((post) =>
        //     post._id === action.payload._id ? action.payload : post
        //   )
        //   .comments.filter(
        //     (comment) => comment._id !== action.payload.commentId
        //   ), action.payload,

        default:
            return posts
    }
}

export default postReducers
