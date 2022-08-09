import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./reducers/productReducer";
import productListReducer from "./reducers/productListReducer";
import subtypeReducer from "./reducers/subtypeReducer";
import subtypeListReducer from "./reducers/subtypeListReducer";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";

const middlewares = [thunk];

const authPersistConfig = {
  key: "authReducer",
  storage,
  blacklist: ["errorMessages"],
};

const rootReducer = combineReducers({
  productReducer,
  productListReducer,
  subtypeReducer,
  subtypeListReducer,
  cartReducer,
  authReducer: persistReducer(authPersistConfig, authReducer),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
