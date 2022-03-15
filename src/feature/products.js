import {
    createEntityAdapter,
    createSlice,
  } from '@reduxjs/toolkit';
import {getBills, postBill} from '../action';

export const productSlice = createSlice({
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

const productAdaptor = createEntityAdapter();
export const productSelector = productAdaptor.getSelectors(state => state.product2);
  
export const productSlice2 = createSlice({
    name: 'product2',
    initialState: productAdaptor.getInitialState({loading: false}),
    reducers: {
      addOne: productAdaptor.addOne,
      removeOne: productAdaptor.removeOne,
      // removeAll: productAdaptor.removeAll,
    },
    extraReducers: {
      [postBill.pending](state) {
        state.loading = true;
      },
      [postBill.fulfilled](state, actions) {
        state.loading = false;
        productAdaptor.removeAll(state);
        console.log('removed from reducer');
      },
      [postBill.rejected](state, actions) {
        console.log('test reject');
        state.loading = false;
      },
      [getBills.pending](state, actions) {
        console.log('test pending')
        state.loading = true;
      },
      [getBills.fulfilled](state, actions) {
        state.loading = false;
        console.log('test fulfilled');
        productAdaptor.setAll(state, actions.payload);
        console.log('get bill from reducer');
      },
      [getBills.rejected](state, actions) {
        state.loading = false;
      },
    },
  });
  
  export const {addOne, removeOne, removeAll} = productSlice2.actions;