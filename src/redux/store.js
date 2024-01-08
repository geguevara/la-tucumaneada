import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import recomendadosReducer from "./recomendados/recomendadosSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import ordersReducer from "./orders/ordersSlice";

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recomendadosReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefalutMidleware) =>
    getDefalutMidleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
