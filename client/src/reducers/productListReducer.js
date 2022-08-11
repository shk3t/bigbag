import ProductService from "../API/ProductService";

const LIST_PRODUCTS = "LIST_PRODUCTS";

export default function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { products: action.payload };
    default:
      return state;
  }
}

export const listProductsAction = (params) => async (dispatch) => {
  const products = await ProductService.getAllProducts(params);
  return dispatch({ type: LIST_PRODUCTS, payload: products });
};
