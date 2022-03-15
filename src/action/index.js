import {CreateThunkAction} from '../request-factory/request-factory';

export const postBill = CreateThunkAction({
    'path':'products2/postProducts', 
    'url': 'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
    'method': 'POST'
})
  
export const getBills = CreateThunkAction({
'path': 'products2/getBills', 
'url': 'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
'method': 'GET'
})