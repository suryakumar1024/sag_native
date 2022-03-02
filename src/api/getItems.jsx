import axios from "axios";

export const getItems = (url) => {
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
};
