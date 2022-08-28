const ADD_ITEM = "ADD_ITEM";
const SET_QUANTITY = "SET_QUANTITY";
const REMOVE_ITEM = "REMOVE_ITEM";
const EMPTY_CART = "EMPTY_CART";

export default function cartReducer(state = { cartItems: {} }, action) {
  const { cartItems } = state || {};
  const { id, item, quantity } = action.payload || {};
  switch (action.type) {
    case ADD_ITEM:
      if (!cartItems.hasOwnProperty(id)) {
        cartItems[id] = item;
      } else {
        cartItems[id] = {
          ...cartItems[id],
          quantity: cartItems[id].quantity + item.quantity,
        };
      }
      return { cartItems: { ...cartItems } };
    case SET_QUANTITY:
      cartItems[id] = { ...cartItems[id], quantity };
      return { cartItems: { ...cartItems } };
    case REMOVE_ITEM:
      delete cartItems[id];
      return { cartItems: { ...cartItems } };
    case EMPTY_CART:
      return { cartItems: [] };
    default:
      return state;
  }
}

export const addItemAction = (product, quantity) => async (dispatch) => {
  if (quantity > 0) {
    const { id, type, size, price, image, items_per_pack } = product;
    const item = {
      id,
      name: `${type} ${size}`,
      price,
      image,
      step: items_per_pack,
      quantity,
    };
    return dispatch({ type: ADD_ITEM, payload: { id, item } });
  }
};

export const setQuantityAction = (id, quantity) => async (dispatch) => {
  return dispatch({
    type: SET_QUANTITY,
    payload: { id, quantity: quantity > 0 ? quantity : 0 },
  });
};

export const removeItemAction = (id) => async (dispatch) => {
  return dispatch({ type: REMOVE_ITEM, payload: { id } });
};

export const clearCartAction = () => async (dispatch) => {
  return dispatch({ type: EMPTY_CART, payload: null });
};
