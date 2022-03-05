import {ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {styles} from './productList-style';
import Product from '../component/Product';
import {useSelector} from 'react-redux';
import BottomBar from '../component/BottomBar';
import ModalBase from '../component/ModalBase';

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

        <ModalBase/>

        {products.map(item => (
          <Product key={item.id} id={item.id} cost={item.cost} name={item.name} />
        ))}
      </ScrollView>

      <BottomBar />

    </View>
  );
};
export default ProductList;
