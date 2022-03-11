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
      state.loading = false;debugger;
      var test = {
        "-MxiRJC7eRAmmjgs8DJN": 
            {
                "cost": "80",
                "id": "69BHQN5F7RItMZrFFIEz1",
                "name": "name"
            }};
      productAdaptor.setAll( state,test);
      console.log('get bill from reducer');
    },
    [getBills.rejected](state) {
      state.loading = false;
    },
  },
});

export const {addOne, removeOne, removeAll} = productSlice2.actions;

export default productSlice2.reducer;
