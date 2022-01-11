import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./Reducers/rootReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "Basket",
  storage,
  whitelist: ["Basket"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const composeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(persistedReducer, composeEnhancers);
export const persistor = persistStore(store);
