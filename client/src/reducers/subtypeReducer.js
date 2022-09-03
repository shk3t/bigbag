import SubtypeService from "../API/SubtypeService";

const SET_SUBTYPE = "SET_SUBTYPE";
const CLEAR_SUBTYPE = "CLEAR_SUBTYPE";

export default function subtypeReducer(state = { subtype: null }, action) {
  switch (action.type) {
    case SET_SUBTYPE:
      return { subtype: action.payload };
    case CLEAR_SUBTYPE:
      return { subtype: null };
    default:
      return state;
  }
}

export const createSubtypeAction = (data) => async (dispatch) => {
  const subtype = await SubtypeService.createSubtype(data);
  dispatch({ type: SET_SUBTYPE, payload: subtype });
};

export const updateSubtypeAction = (id, data) => async (dispatch) => {
  const subtype = await SubtypeService.updateSubtype(id, data);
  dispatch({ type: SET_SUBTYPE, payload: subtype });
};

export const deleteSubtypeAction = (id) => async (dispatch) => {
  await SubtypeService.deleteSubtype(id);
  dispatch({ type: CLEAR_SUBTYPE });
};
