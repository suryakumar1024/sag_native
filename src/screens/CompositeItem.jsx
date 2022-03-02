import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getItems } from "../api/getItems";
import { postItems } from "../api/postItem";
import InputField from "../components/InputField";
import { itemActions } from "../store/itemSlice";
import classes from "./items_styles.module.css";

const field = [
  {name:'image',val: ""},
  {name:'type',val: ""},
  {name:'name',val: ""},
  {name:'sku',val: ""},
  {name:'unit',val: ""},
  {name:'returnItem',val: ""},
  {name:'associate',val: ""},
  {name:'sellingPriceINR',val: ""},
  {name:'account',val: ""},
  {name:'discription',val: ""},
  {name:'purchasingInfo',val: ""},
  {name:'costPrice',val: ""},
  {name:'preferredVendor',val: ""},
  {name:'dimension',val: ""}, // repeated 2 times
  {name:'weight',val: ""}, // repeated 2 times
  {name:'brand',val: ""}, // repeated 2 times
  {name:'manufacturer',val: ""},
  {name:'upc',val: ""},
  {name:'mpn',val: ""},
  {name:'isbn',val: ""},
  {name:'ean',val: ""},
  {name:'inventoryAccount',val: ""},
  {name:'openingStock',val: ""}, // repeated 2 times
  {name:'reorderingPoint',val: ""},
];

function CompositeItems() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
  const [compositeItem, setCompositeItem] = useState(field);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    const newArr = compositeItem.map(obj => {
        if (obj.name === name) {
          return {...obj, val:value};
        }
      
        return obj;
      });

    setCompositeItem(newArr);
  };

  const submitHandler = () => {
    dispatch(itemActions.updateArray({items:compositeItem}))

    // send an post request

    // postItems(url,data)

    navigate('/tabel')
  };

// useEffect(() => {
  
//   return () => {
//     const data= getItems(url)
//     dispatch(itemActions.updateArray({items:data}))
//   }

// }, [])


  return (
    <Fragment>
      <div className={classes.itemContainer}>
        <div className={classes.innerContainer}>
          <h1>Composite item</h1>
          <InputField
            id="image"
            value={compositeItem.image}
            change={inputChangeHandler}
            label="Image"
          />
          <InputField
            id="type"
            value={compositeItem.type}
            change={inputChangeHandler}
            label="Type"
          />
          <InputField
            id="name"
            value={compositeItem.name}
            change={inputChangeHandler}
            label="Name"
          />
          <InputField
            id="sku"
            value={compositeItem.sku}
            change={inputChangeHandler}
            label="SKU"
          />
          <InputField
            id="unit"
            value={compositeItem.unit}
            change={inputChangeHandler}
            label="Unit"
          />
          <InputField
            id="returnItem"
            value={compositeItem.returnItem}
            change={inputChangeHandler}
            label="Return item"
          />

          <InputField
            id="associate"
            value={compositeItem.manufacturer}
            change={inputChangeHandler}
            label="Associate"
          />
          <InputField
            id="sellingPriceINR"
            value={compositeItem.manufacturer}
            change={inputChangeHandler}
            label="Selling prize INR"
          />

          <InputField
            id="account"
            value={compositeItem.account}
            change={inputChangeHandler}
            label="Account"
          />
          <InputField
            id="description"
            value={compositeItem.description}
            change={inputChangeHandler}
            label="Description"
          />
          <InputField
            id="purchasingInfo"
            value={compositeItem.purchasingInfo}
            change={inputChangeHandler}
            label="Purchasing info"
          />
          <InputField
            id="costPrice"
            value={compositeItem.costPrice}
            change={inputChangeHandler}
            label="Cost price "
          />
          <InputField
            id="preferredVendor"
            value={compositeItem.preferredVendor}
            change={inputChangeHandler}
            label="Preferred vendor"
          />
          <InputField
            id="dimension"
            value={compositeItem.dimension}
            change={inputChangeHandler}
            label="dimension"
          />
          <InputField
            id="manufacturer"
            value={compositeItem.manufacturer}
            change={inputChangeHandler}
            label="Manufacturer"
          />
          <InputField
            id="weight"
            value={compositeItem.weight}
            change={inputChangeHandler}
            label="Weight"
          />
          <InputField
            id="brand"
            value={compositeItem.brand}
            change={inputChangeHandler}
            label="Brand"
          />
          <InputField
            id="upc"
            value={compositeItem.upc}
            change={inputChangeHandler}
            label="UPC"
          />

          <InputField
            id="mpn"
            value={compositeItem.mpn}
            change={inputChangeHandler}
            label="MPN"
          />
          <InputField
            id="isbn"
            value={compositeItem.isbn}
            change={inputChangeHandler}
            label="ISBN"
          />
          <InputField
            id="ean"
            value={compositeItem.ean}
            change={inputChangeHandler}
            label="EAN"
          />
          <InputField
            id="inventoryAccount"
            value={compositeItem.inventoryAccount}
            change={inputChangeHandler}
            label="Inventory account"
          />
          <InputField
            id="openingStock"
            value={compositeItem.openingStock}
            change={inputChangeHandler}
            label="Opening stock"
          />

          <InputField
            id="reorderingPoint"
            value={compositeItem.reorderingPoint}
            change={inputChangeHandler}
            label="Reordering point"
          />
          <button onClick={submitHandler}>submit</button>
        </div>
      </div>
    </Fragment>
  );
}

export default CompositeItems;
