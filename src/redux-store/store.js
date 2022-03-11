import {
  configureStore,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import ProductSlice2 from './ProductSlice2';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    showModal: false,
    defaultName: '',
    defaultCost: '',
  },
  reducers: {
   
    openModal(state, action) {
      state.showModal = true;
      
    },

    closeModal(state, action) {
      state.showModal = false;
      state.defaultCost = '';
      state.defaultName = '';
    },
  
  },
});

export const productsActions = productSlice.actions;

export const store = configureStore({
  reducer: {product: productSlice.reducer, product2: ProductSlice2},
});
