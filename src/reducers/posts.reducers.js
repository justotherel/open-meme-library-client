import { FETCH_ALL, FETCH, CREATE, LIKE, DELETE, CREATE_COMMENT} from "../constants/actionTypes";

const postReducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case FETCH:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case CREATE:
      return [...posts, action.payload]
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case DELETE:
      return posts.filter((post) => post._id !== action.payload)
    case CREATE_COMMENT:
      return [...posts.map((post) => post._id === action.payload._id ? action.payload : post).comments, action.payload]
    default:
      return posts
  }
};

export default postReducers;
