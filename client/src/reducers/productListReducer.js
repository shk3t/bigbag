import ProductService from "../API/ProductService";

const LIST_PRODUCTS = "LIST_PRODUCTS";
const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";

export default function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { products: action.payload };
    case CLEAR_PRODUCTS:
      return { products: [] };
    default:
      return state;
  }
}

export const listProductsAction = (params) => async (dispatch) => {
  const products = await ProductService.getAllProducts(params);
  return dispatch({ type: LIST_PRODUCTS, payload: products });
};

export const clearProductListAction = () => (dispatch) => {
  return dispatch({type: CLEAR_PRODUCTS, payload: null })
}
