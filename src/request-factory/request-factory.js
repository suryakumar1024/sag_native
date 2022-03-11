import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postBill = createAsyncThunk('products2/postProducts',async(data)=>{
   axios
  .post(
    'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
    data,
  )
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));
}) 

export const getBills=createAsyncThunk('procutss2/getBills',async()=>{
  return axios
  .get(
    'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
  
  )
  .then(res => {
    console.log(res);
    return res.data
  })
  .catch(err => console.log(err));
})