import {ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {styles} from './productList-style';
import AddButtons from '../component/AddButtons';
import AddIcon from '../component/AddIcon';
import Product from '../component/Product';
import {useSelector} from 'react-redux';
import ProductModal from '../component/Modal';

const ProductList = props => {
  const products = useSelector(state => state.product.products);

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          paddingBottom: 190,
          flexGrow: 1,
          alignItems: 'center',
        }}>

        <ProductModal />

        {products.map(item => (
          <Product key={Math.random()} cost={item.cost} name={item.name} />
        ))}
      </ScrollView>

      <AddButtons />
      <AddIcon />

    </View>
  );
};
export default ProductList;
