import {
  configureStore,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import ProductSlice2 from './ProductSlice2';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    showModal: false,
    defaultName: '',
    defaultCost: '',
  },
  reducers: {
    addProduct(state, action) {
      state.products = [...state.products, action.payload.products];
      state.defaultCost = '';
      state.defaultName = '';
    },
    openModal(state, action) {
      state.showModal = true;
    },

    closeModal(state, action) {
      state.showModal = false;
      state.defaultCost = '';
      state.defaultName = '';
    },
    submitHandler(state) {
      state.products = [];
    },
    deleteHandler(state, action) {
      state.products = action.payload.products;
    },
    editModal(state, action) {
      state.showModal = true;
      state.defaultName = action.payload.name;
      state.defaultCost = action.payload.cost;
    },
  },
});

export const productsActions = productSlice.actions;

export const store = configureStore({
  reducer: {product: productSlice.reducer, product2: ProductSlice2},
});
