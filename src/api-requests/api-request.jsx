import axios from "axios";

export const getData=(url)=>{

    axios
    .get(url)
        .then(res => {
            const data=res.data.product
            return data;
        })
        .catch(err => console.log(err));

    }