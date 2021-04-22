import {
    FETCH_ALL,
    FETCH,
    CREATE,
    LIKE,
    DELETE,
} from '../constants/actionTypes'

const postReducers = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            posts = action.payload
            return posts
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
        default:
            return posts
    }
}

export default postReducers
