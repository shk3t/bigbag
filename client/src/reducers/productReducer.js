import ProductService from "../API/ProductService";
import { POLY_BAG } from "../consts";

const GET_PRODUCT = "GET_PRODUCT";
const SET_PRODUCT = "SET_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
  product: {
    type: POLY_BAG,
    image: null,
    price: 0.0,
    // price100: 0.0,
    // price200: 0.0,
    // price500: 0.0,
    // price1000: 0.0,
    // price3000: 0.0,
    // price5000: 0.0,
    // price10000: 0.0,
    // price30000: 0.0,
    price_on_request: false,
    in_stock: true,
    new: false,
    sale: false,
    subtype: "",
    size: "",
    tag: "",
    color: "",
    poly_grade: "",
    bag_weight: 0.0,
    weight_error: 3,
    items_per_pack: 0,
    top_modification: "",
    bottom_modification: "",
    pack_size: "",
    pack_volume: "",
  },
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
    case SET_PRODUCT:
    case CREATE_PRODUCT:
    case UPDATE_PRODUCT:
      return { product: { ...state.product, ...action.payload } };
    case DELETE_PRODUCT:
      return { product: initialState };
    default:
      return state;
  }
}

export const getProductAction = (id) => async (dispatch) => {
  const product = await ProductService.getProduct(id);
  dispatch({ type: GET_PRODUCT, payload: product });
};

export const setProductAction = (data) => async (dispatch) => {
  dispatch({ type: SET_PRODUCT, payload: data });
};

export const createProductAction = (data) => async (dispatch) => {
  let product = {};
  if (data.imageFile) {
    product = await ProductService.createProduct(data);
    product.image = await ProductService.uploadImage(
      product.id,
      data.imageFile
    );
  } else {
    product = await ProductService.createProduct(data);
  }
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
