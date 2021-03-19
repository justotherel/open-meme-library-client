import * as api from "../api/index.js";
import { FETCH_ALL, CREATE, LIKE, DELETE, FETCH, CREATE_COMMENT } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    const {data} = await api.fetchPost(id)
    dispatch({type: FETCH, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("like post action", user)
  try {
    const { data } = await api.likePost(id, user.token, user.username);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

export const createComment = (id, newComment) => async (dispatch) => {
  try {
    const {data} = await  api.createComment(id, newComment)

    dispatch({type: CREATE_COMMENT, payload: data})
  } catch (error) {
    console.log(error);
  }
}

export const deleteComment = (id, commentId) => async (dispatch) => {
  try {
    await api.deleteComment(id, commentId)
    dispatch({ type: DELETE, payload: commentId });

  } catch (error) {
    console.log(error)
  }
}