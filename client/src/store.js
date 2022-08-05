import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { productReducer } from "./reducers/productReducer";
import { authReducer } from "./reducers/authReducer";

// TODO persist state between reloads

const middlewares = [thunk];

const authPersistConfig = {
  key: "authReducer",
  storage,
  blacklist: ["authErrorMessages"],
};

const rootReducer = combineReducers({
  productReducer,
  authReducer: persistReducer(authPersistConfig, authReducer),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
