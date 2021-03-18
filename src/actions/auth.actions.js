import * as api from "../api/index.js";
import { ATUH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //login
    history.push("/");

  } catch (error) {
    console.log(error);
  }
};

export const signup = (poformData, history) => async (dispatch) => {
  try {
    //login
    history.push("/");

  } catch (error) {
    console.log(error);
  }
};
