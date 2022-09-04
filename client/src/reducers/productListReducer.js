import ProductService from "../API/ProductService";

const LIST_PRODUCTS = "LIST_PRODUCTS";
const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
const CREATE_PRODUCT = "CREATE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export default function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { products: action.payload };
    case CLEAR_PRODUCTS:
      return { products: [] };
    case CREATE_PRODUCT:
      return { products: [...state.products, action.payload.product] };
    case UPDATE_PRODUCT:
      return {
        products: state.products.map((el) =>
          el.id !== action.payload.id ? el : action.payload.product
        ),
      };
    case DELETE_PRODUCT:
      return {
        products: state.products.filter((el) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export const listProductsAction = (params) => async (dispatch) => {
  const products = await ProductService.getAllProducts(params);
  dispatch({ type: LIST_PRODUCTS, payload: products });
};

export const clearProductListAction = () => (dispatch) => {
  dispatch({ type: CLEAR_PRODUCTS });
};

export const createProductAction = (data) => async (dispatch) => {
  if (!data.tag) data.tag = null;
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
  dispatch({ type: CREATE_PRODUCT, payload: { product } });
};

export const updateProductAction = (id, data) => async (dispatch) => {
  if (!data.tag) data.tag = null;
  let product = {};
  if (data.imageFile) {
    product = await ProductService.updateProduct(id, data);
    product.image = await ProductService.uploadImage(
      product.id,
      data.imageFile
    );
  } else {
    product = await ProductService.updateProduct(id, data);
  }
  dispatch({ type: UPDATE_PRODUCT, payload: { id, product } });
};

export const deleteProductAction = (id) => async (dispatch) => {
  await ProductService.deleteProduct(id);
  dispatch({ type: DELETE_PRODUCT, payload: { id } });
};
