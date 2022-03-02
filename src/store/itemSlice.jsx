import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    itemsArray:[]
  },
  reducers: {
  updateArray(state,action){
      state.itemsArray=action.payload.items
  }
  }
})

// Action creators are generated for each case reducer function
export const itemActions = itemSlice.actions

export default itemSlice.reducer