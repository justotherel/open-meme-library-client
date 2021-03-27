import { SET_ERROR, HIDE_ERROR } from "constants/actionTypes";

export function setError(error) {
  return {
    type: SET_ERROR,
    error: error,
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}
