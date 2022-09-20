import ProductService from "../API/ProductService";
import { POLY_BAG, BIG_BAG } from "../consts";

const SET_PRODUCT = "SET_PRODUCT";
const CLEAR_PRODUCT = "CLEAR_PRODUCT";

const emptyProduct = {
  type: null,
  image: null,
  price: null,
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
};

const emptyPolyBag = {
  ...emptyProduct,
  type: POLY_BAG,
  subtype: null,
  size: null,
  tag: null,
  color: null,
  poly_grade: null,
  bag_weight: null,
  weight_error: 3,
  items_per_pack: null,
};

const emptyBigBag = {
  ...emptyProduct,
  type: BIG_BAG,
  subtype: null,
  size: null,
  tag: null,
  top_modification: "",
  bottom_modification: "",
  bag_weight: null,
  items_per_pack: null,
  pack_size: null,
  pack_volume: null,
};

export default function productReducer(
  state = { product: emptyProduct },
  action
) {
  switch (action.type) {
    case SET_PRODUCT:
      return { product: { ...action.payload } };
    case CLEAR_PRODUCT:
      let clearedProduct = null;
      if (!action.payload) clearedProduct = emptyProduct;
      else if (action.payload.type === POLY_BAG) clearedProduct = emptyPolyBag;
      else if (action.payload.type === BIG_BAG) clearedProduct = emptyBigBag;
      return { product: { ...clearedProduct } };
    default:
      return state;
  }
}

export const getProductAction = (id) => async (dispatch) => {
  const product = await ProductService.getProduct(id);
  dispatch({ type: SET_PRODUCT, payload: product });
};

export const setProductAction = (data) => (dispatch) => {
  dispatch({ type: SET_PRODUCT, payload: data });
};

export const clearProductAction =
  (type = POLY_BAG) =>
  (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT, payload: { type } });
  };
