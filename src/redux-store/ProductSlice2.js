import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

export const productAdaptor = createEntityAdapter();
export const productSelector = productAdaptor.getSelectors(
  state => state.product2,
);
const productSlice2 = createSlice({
  name: 'product2',
  initialState: productAdaptor.getInitialState(),
  reducers: {
    addOne: productAdaptor.addOne,
    removeOne:productAdaptor.removeOne,
    removeAll:productAdaptor.removeAll,
  },
});


export const {addOne,removeOne,removeAll} = productSlice2.actions;

export default productSlice2.reducer;
