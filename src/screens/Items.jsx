import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import InputField from "../components/InputField";
import { itemActions } from "../store/itemSlice";
import classes from "./items_styles.module.css";

const field = [
  { name: "image", val: "" },
  { name: "type", val: "" },
  { name: "name", val: "" },
  { name: "sku", val: "" },
  { name: "unit", val: "" },
  { name: "returnItem", val: "" },
  { name: "manufacturer", val: "" },
  { name: "weight", val: "" },
  { name: "brand", val: "" },
  { name: "upc", val: "" },
  { name: "mpn", val: "" },
  { name: "isbn", val: "" },
  { name: "ean", val: "" },
  { name: "salesInformation", val: "" },
  { name: "sellingPrice", val: "" },
  { name: "account", val: "" },
  { name: "purchasingInfo", val: "" },
  { name: "costPrizeInr", val: "" },
  { name: "description", val: "" },
  { name: "trackInventory", val: "" },
  { name: "inventoryAccount", val: "" },
  { name: "openingStock", val: "" },
  { name: "reorderingPoint", val: "" },
  { name: "openingStockRatePerUnit", val: "" },
  { name: "preferredVendor", val: "" },
];

function Items() {
  const [items, setItems] = useState(field);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    
    const updatedArray = items.map((item) => {
      if (item.name === name) {
        return { ...item, val: value };
      }
      return item;
    });
    setItems(updatedArray)
  };

  const submitHandler = () => {
    dispatch(itemActions.updateArray({items:items}))
    navigate('/tabel')
  };

  return (
    <Fragment>
      <div className={classes.itemContainer}>
        <div className={classes.innerContainer}>
          <h1 className={classes.header}>ITEM</h1>
          <InputField
            id="image"
            value={items.image}
            change={inputChangeHandler}
            label="Image"
          />
          <InputField
            id="type"
            value={items.type}
            change={inputChangeHandler}
            label="Type"
          />
          <InputField
            id="name"
            value={items.name}
            change={inputChangeHandler}
            label="Name"
          />
          <InputField
            id="sku"
            value={items.sku}
            change={inputChangeHandler}
            label="SKU"
          />
          <InputField
            id="unit"
            value={items.unit}
            change={inputChangeHandler}
            label="Unit"
          />
          <InputField
            id="returnItem"
            value={items.returnItem}
            change={inputChangeHandler}
            label="Return item"
          />
          <InputField
            id="manufacturer"
            value={items.manufacturer}
            change={inputChangeHandler}
            label="Manufacturer"
          />
          <InputField
            id="weight"
            value={items.weight}
            change={inputChangeHandler}
            label="Weight"
          />
          <InputField
            id="brand"
            value={items.brand}
            change={inputChangeHandler}
            label="Brand"
          />
          <InputField
            id="upc"
            value={items.upc}
            change={inputChangeHandler}
            label="UPC"
          />
          <InputField
            id="mpn"
            value={items.mpn}
            change={inputChangeHandler}
            label="MPN"
          />
          <InputField
            id="isbn"
            value={items.isbn}
            change={inputChangeHandler}
            label="ISBN"
          />
          <InputField
            id="ean"
            value={items.ean}
            change={inputChangeHandler}
            label="EAN"
          />
          <InputField
            id="salesInformation"
            value={items.salesInformation}
            change={inputChangeHandler}
            label="Sales information"
          />
          <InputField
            id="sellingPrice"
            value={items.sellingPrice}
            change={inputChangeHandler}
            label="Selling price"
          />
          <InputField
            id="account"
            value={items.account}
            change={inputChangeHandler}
            label="Account"
          />
          <InputField
            id="purchasingInfo"
            value={items.purchasingInfo}
            change={inputChangeHandler}
            label="Purchasing info"
          />
          <InputField
            id="costPrizeInr"
            value={items.costPrizeInr}
            change={inputChangeHandler}
            label="Cost price INR"
          />
          <InputField
            id="description"
            value={items.description}
            change={inputChangeHandler}
            label="Description"
          />
          <InputField
            id="trackInventory"
            value={items.trackInventory}
            change={inputChangeHandler}
            label="Track Inventory"
          />
          <InputField
            id="inventoryAccount"
            value={items.inventoryAccount}
            change={inputChangeHandler}
            label="Inventory account"
          />
          <InputField
            id="openingStock"
            value={items.openingStock}
            change={inputChangeHandler}
            label="Opening stock"
          />
          <InputField
            id="reorderingPoint"
            value={items.reorderingPoint}
            change={inputChangeHandler}
            label="Reordering point"
          />
          <InputField
            id="openingStockRatePerUnit"
            value={items.openingStockRatePerUnit}
            change={inputChangeHandler}
            label="Opening stock rate per unit"
          />
          <InputField
            id="preferredVendor"
            value={items.preferredVendor}
            change={inputChangeHandler}
            label="Preferred vendor"
          />
          <button onClick={submitHandler} >submit</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Items;
