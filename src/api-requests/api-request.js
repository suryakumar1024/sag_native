import axios from 'axios';

export const postBill = data => {
  axios
    .post(
      'https://cart-f6d03-default-rtdb.asia-southeast1.firebasedatabase.app/bills.json',
      data,
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};
