import ProductService from "../API/ProductService";

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const GET_PRODUCT = "GET_PRODUCT";


export function productReducer(state = { products: [] }, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { products: action.payload };
    case GET_PRODUCT:
      return { product: action.payload };
    default:
      return state;
  }
}

export const listProductsAction = () => async (dispatch) => {
  const products = await ProductService.getAll();
  return { type: GET_PRODUCT_LIST, payload: products };
}

export const getProductAction = (id) => async (dispatch) => {
  const product = await ProductService.getById(id);
  dispatch({ type: GET_PRODUCT, payload: product });
};
