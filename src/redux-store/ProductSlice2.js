import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {getBills, postBill} from '../request-factory/request-factory';

export const productAdaptor = createEntityAdapter();
export const productSelector = productAdaptor.getSelectors(
  state => state.product2,
);

const productSlice2 = createSlice({
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
    [postBill.fulfilled](state) {
      state.loading = false;
      productAdaptor.removeAll(state);
      console.log('removed from reducer');
    },
    [postBill.rejected](state) {
      state.loading = false;
    },
    [getBills.pending](state) {
      state.loading = true;
    },
    [getBills.fulfilled](state, {payload}) {
      state.loading = false;
      debugger;
     const data = Object.values(payload)

     // get items and list them  when bill page is clicked 
     // for now always rendering the first bill only

      productAdaptor.setAll( state,data[0]);
      console.log(payload,'get bill from reducer');
    },
    [getBills.rejected](state) {
      state.loading = false;
    },
  },
});

export const {addOne, removeOne, removeAll} = productSlice2.actions;

export default productSlice2.reducer;
