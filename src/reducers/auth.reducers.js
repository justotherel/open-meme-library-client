import { AUTH, LOGOUT} from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.authData }));
      return { ...DataTransfer, authData: action?.authData };
    case LOGOUT:
      localStorage.clear();
      return { ...DataTransfer, authData: null };
    default:
      return state;
  }
};

export default authReducer;
