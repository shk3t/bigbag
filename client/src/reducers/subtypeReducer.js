const SET_SUBTYPE = "SET_SUBTYPE";
const CLEAR_SUBTYPE = "CLEAR_SUBTYPE";

const emptySubtype = {
  name: null,
};

export default function subtypeReducer(
  state = { subtype: emptySubtype },
  action
) {
  switch (action.type) {
    case SET_SUBTYPE:
      return { subtype: { ...action.payload } };
    case CLEAR_SUBTYPE:
      return { subtype: { ...emptySubtype } };
    default:
      return state;
  }
}

export const setSubtypeAction = (data) => (dispatch) => {
  dispatch({ type: SET_SUBTYPE, payload: data });
};

export const clearSubtypeAction = () => (dispatch) => {
  dispatch({ type: CLEAR_SUBTYPE });
};
