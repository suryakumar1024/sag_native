import {configureStore} from '@reduxjs/toolkit';
import {productSlice, productSlice2} from './feature/products';


export const productsActions = productSlice.actions;

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    product2: productSlice2.reducer
  },
});
