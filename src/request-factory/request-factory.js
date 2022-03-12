import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postBill = createAsyncThunk('products2/postProducts',async(data)=>{
   axios
  .post(
    'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
    data,
  )
  .then(res => {
    console.log(res,'post res');
  })
  .catch(err => console.log(err,'err from post'));
}) 

export const getBills=createAsyncThunk('procutss2/getBills',async()=>{
   axios
  .get(
    'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
  
  )
  .then(res => {
    console.log(res.data,'get res');
     const data= res.data
     debugger;
  })
  .catch(err => console.log(err,'err from get'));
})