import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./reducers/productReducer";
import productListReducer from "./reducers/productListReducer";
import subtypeReducer from "./reducers/subtypeReducer";
import subtypeListReducer from "./reducers/subtypeListReducer";
import userReducer from "./reducers/userReducer";
import userListReducer from "./reducers/userListReducer";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";
import createModalRequestReducer from "./reducers/modalRequestReducer";
import { AUTH_REQUEST, CALL_REQUEST, CART_REQUEST, ADMIN_REQUEST} from "./consts";

const middlewares = [thunk];

const authPersistConfig = {
  key: "authReducer",
  storage,
  blacklist: ["errorMessages"],
};

const cartPersistConfig = {
  key: "cartReducer",
  storage,
};

const rootReducer = combineReducers({
  productReducer,
  productListReducer,
  subtypeReducer,
  subtypeListReducer,
  userReducer,
  userListReducer,
  cartReducer: persistReducer(cartPersistConfig, cartReducer),
  authReducer: persistReducer(authPersistConfig, authReducer),
  callRequestReducer: createModalRequestReducer(CALL_REQUEST),
  cartRequestReducer: createModalRequestReducer(CART_REQUEST),
  authRequestReducer: createModalRequestReducer(AUTH_REQUEST),
  adminRequestReducer: createModalRequestReducer(ADMIN_REQUEST),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
