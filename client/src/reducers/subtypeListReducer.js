import SubtypeService from "../API/SubtypeService";

const LIST_SUBTYPES = "LIST_SUBTYPES";
const CLEAR_SUBTYPES = "CLEAR_SUBTYPES";
const CREATE_SUBTYPE = "CREATE_SUBTYPE";
const UPDATE_SUBTYPE = "UPDATE_SUBTYPE";
const DELETE_SUBTYPE = "DELETE_SUBTYPE";

export default function subtypeListReducer(state = { subtypes: [] }, action) {
  switch (action.type) {
    case LIST_SUBTYPES:
      return { subtypes: action.payload };
    case CLEAR_SUBTYPES:
      return { subtypes: [] };
    case CREATE_SUBTYPE:
      return { subtypes: [...state.subtypes, action.payload.subtype] };
    case UPDATE_SUBTYPE:
      return {
        subtypes: state.subtypes.map((el) =>
          el.name !== action.payload.id ? el : action.payload.subtype
        ),
      };
    case DELETE_SUBTYPE:
      return {
        subtypes: state.subtypes.filter((el) => el.name !== action.payload.id),
      };
    default:
      return state;
  }
}

export const listSubtypesAction = (type) => async (dispatch) => {
  const subtypes = await SubtypeService.getAllSubtypes(type);
  dispatch({ type: LIST_SUBTYPES, payload: subtypes });
};

export const clearSubtypeListAction = () => (dispatch) => {
  dispatch({ type: CLEAR_SUBTYPES });
};

export const createSubtypeAction = (type, data) => async (dispatch) => {
  const subtype = await SubtypeService.createSubtype(type, data);
  dispatch({ type: CREATE_SUBTYPE, payload: { subtype } });
};

export const updateSubtypeAction = (type, id, data) => async (dispatch) => {
  const subtype = await SubtypeService.updateSubtype(type, id, data);
  dispatch({ type: UPDATE_SUBTYPE, payload: { id, subtype } });
};

export const deleteSubtypeAction = (type, id) => async (dispatch) => {
  await SubtypeService.deleteSubtype(type, id);
  dispatch({ type: DELETE_SUBTYPE, payload: { id } });
};
