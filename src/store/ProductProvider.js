import React from 'react';
import ProductContext from './ProductContext';

const ProductProvider = props => {
  return <ProductContext.Provider value={{items:[]}} >{props.children}</ProductContext.Provider>;
};

export default ProductProvider;
