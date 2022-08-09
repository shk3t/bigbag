import SubtypeService from "../API/SubtypeService";

const CREATE_SUBTYPE = "CREATE_SUBTYPE";
const UPDATE_SUBTYPE = "UPDATE_SUBTYPE";
const DELETE_SUBTYPE = "DELETE_SUBTYPE";

export default function subtypeReducer(state = { subtype: null }, action) {
  switch (action.type) {
    case CREATE_SUBTYPE:
    case UPDATE_SUBTYPE:
      return { subtype: action.payload };
    case DELETE_SUBTYPE:
      return { subtype: null };
    default:
      return state;
  }
}

export const createSubtypeAction = (data) => async (dispatch) => {
  const subtype = await SubtypeService.createSubtype(data);
  dispatch({ type: CREATE_SUBTYPE, payload: subtype });
};

export const updateSubtypeAction = (id, data) => async (dispatch) => {
  const subtype = await SubtypeService.updateSubtype(id, data);
  dispatch({ type: UPDATE_SUBTYPE, payload: subtype });
};

export const deleteSubtypeAction = (id) => async (dispatch) => {
  await SubtypeService.deleteSubtype(id);
  dispatch({ type: DELETE_SUBTYPE, payload: null });
};
