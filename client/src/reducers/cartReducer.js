const ADD_ITEM = "ADD_ITEM";
const SET_QUANTITY = "SET_QUANTITY";
const REMOVE_ITEM = "REMOVE_ITEM";
const EMPTY_CART = "EMPTY_CART";

export default function cartReducer(state = { items: [] }, action) {
  const { id, item, quantity } = action.payload || {};
  switch (action.type) {
    case ADD_ITEM:
      state.items[id] = item;
      return { items: { ...state.items } };
    case SET_QUANTITY:
      state.items[id].quantity = quantity;
      return { items: { ...state.items } };
    case REMOVE_ITEM:
      delete state.items[id];
      return { items: { ...state.items } };
    case EMPTY_CART:
      return { items: [] };
    default:
      return state;
  }
}

export const addItemAction = (product, quantity) => async (dispatch) => {
  const { id, type, size, image } = product;
  const item = { id, type, size, image, quantity };
  return dispatch({ type: ADD_ITEM, payload: { id, item } });
};

export const setQuantityAction = (id, quantity) => async (dispatch) => {
  return dispatch({ type: SET_QUANTITY, payload: { id, quantity } });
};

export const removeItemAction = (id) => async (dispatch) => {
  return dispatch({ type: REMOVE_ITEM, payload: { id } });
};

export const clearCartAction = () => async (dispatch) => {
  return dispatch({ type: EMPTY_CART, payload: null });
};
