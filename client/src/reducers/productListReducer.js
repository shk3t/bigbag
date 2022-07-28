import { useDispatch } from "react-redux";
import ProductService from "../API/ProductService";

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

const dispatch = useDispatch();

export function productReducer(state = { products: [] }, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { products: action.payload };
    default:
      return state;
  }
}

// TODO async + await
export function listProducts() {
  const products = ProductService.getAll();
  dispatch({ type: GET_PRODUCT_LIST, payload: products });
}
