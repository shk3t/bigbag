const SET_USER = "SET_USER";
const CLEAR_USER = "CLEAR_USER";

const emptyUser = {
  id: null,
  is_admin: false,
  is_manager: false,
};

export default function userReducer(state = { user: emptyUser }, action) {
  switch (action.type) {
    case SET_USER:
      return { user: { ...action.payload } };
    case CLEAR_USER:
      return { user: { ...emptyUser } };
    default:
      return state;
  }
}

export const setUserAction = (data) => (dispatch) => {
  const {id, is_admin, is_manager} = data;
  dispatch({ type: SET_USER, payload: {id, is_admin, is_manager} });
};

export const clearUserAction = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
};
