import ProductService from "../API/ProductService";

const GET_PRODUCT = "GET_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export default function productReducer(state = { product: null }, action) {
  switch (action.type) {
    case GET_PRODUCT:
    case CREATE_PRODUCT:
    case UPDATE_PRODUCT:
      return { product: action.payload };
    case DELETE_PRODUCT:
      return { product: null };
    default:
      return state;
  }
}

export const getProductAction = (id) => async (dispatch) => {
  const product = await ProductService.getProduct(id);
  dispatch({ type: GET_PRODUCT, payload: product });
};

export const createProductAction = (data) => async (dispatch) => {
  const product = await ProductService.createProduct(data);
  dispatch({ type: CREATE_PRODUCT, payload: product });
};

export const updateProductAction = (id, data) => async (dispatch) => {
  const product = await ProductService.updateProduct(id, data);
  dispatch({ type: UPDATE_PRODUCT, payload: product });
};

export const deleteProductAction = (id) => async (dispatch) => {
  await ProductService.deleteProduct(id);
  dispatch({ type: DELETE_PRODUCT, payload: null });
};

// TODO think about ImageReducer
