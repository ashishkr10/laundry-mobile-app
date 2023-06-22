import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CardReducer";
import ProductReducer from "./ProductReducer";

export default configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },
});
