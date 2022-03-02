import axios from "axios";

export const postItems = (url, data) => {
  axios
    .post(url, data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};
