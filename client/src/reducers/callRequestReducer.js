import EmailService from "../API/EmailService";

const SET_REQUEST = "SET_REQUEST";
const SEND_REQUEST = "SEND_REQUEST";
const CLEAR_REQUEST = "CLEAR_REQUEST";

const initialState = {
  request: {
    name: "",
    phone: "",
    comment: "",
  },
};

export default function callRequestReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REQUEST:
    case SEND_REQUEST:
      return { request: { ...state.request, ...action.payload } };
    case CLEAR_REQUEST:
      return { request: initialState };
    default:
      return state;
  }
}

export const setRequestAction = (data) => (dispatch) => {
  dispatch({ type: SET_REQUEST, payload: data });
};

export const sendRequestAction = (data) => async (dispatch) => {
  await EmailService.requestCall(data);
  dispatch({ type: SEND_REQUEST, payload: data });
};

export const ClearRequestAction = () => (dispatch) => {
  dispatch({ type: CLEAR_REQUEST, payload: null });
};
