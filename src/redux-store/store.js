import {configureStore, createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    showModal:false
  },
  reducers: {
    addProduct(state, action) {
      state.products= [...state.products,action.payload.products]
      
    },
    openModal(state,action){
        state.showModal=true
    },

    closeModal(state,action){
        state.showModal=false
    }
  },
});

export const productsActions = productSlice.actions;
export const store = configureStore({
  reducer: {product: productSlice.reducer},
});
