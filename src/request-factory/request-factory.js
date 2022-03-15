import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const CreateThunkAction = (action) => {
  const {method, url, path} = action
  return createAsyncThunk(path, async(data)=>{
    if(method == 'POST'){
      return axios.post(url, data).then(res=>{
        console.log(res, 'res post');
        return res
      }).catch(err=> console.log(err))
    }
    if(method == 'GET'){
      return axios.get(url).then(res => {
        console.log(res.data,'get res');
        const data= res.data
        return data
      }).catch(
        err => console.log(err,'err from get')
        );
    }
  })
}