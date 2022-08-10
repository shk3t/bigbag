import SubtypeService from "../API/SubtypeService";

const LIST_SUBTYPES = "LIST_SUBTYPES";

export default function subtypeListReducer(state = { subtypes: [] }, action) {
  switch (action.type) {
    case LIST_SUBTYPES:
      return { subtypes: action.payload };
    default:
      return state;
  }
}

export const listSubtypesAction = () => async (dispatch) => {
  const subtypes = await SubtypeService.getAllSubtypes();
  return dispatch({ type: LIST_SUBTYPES, payload: subtypes });
};