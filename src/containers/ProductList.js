import {ScrollView, StatusBar, View} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from './styles/productList-style';
import Product from '../component/Product';
import {useDispatch, useSelector} from 'react-redux';
import BottomBar from '../component/BottomBar';
import ModalBase from '../component/ModalBase';
import { productSelector } from '../feature/products';
import { getBills } from '../action';

const ProductList = props => {
  // const products = useSelector(state => state.product.products);

  const prods = useSelector(productSelector.selectAll)
  const {product} = useSelector((state)=> state.product);


  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getBills())
},[])
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
       <ModalBase />
       

        {prods && prods[0]?.map(item => (
          <Product
            key={item.id}
            id={item.id}
            cost={item.cost}
            name={item.name}
          />
        ))}
      </ScrollView>

      <BottomBar />
    </View>
  );
};
export default ProductList;
