import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles/product-style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {productsActions} from '../redux-store/store';
import { productSelector, removeOne } from '../redux-store/ProductSlice2';

const Product = props => {
  const products = useSelector(state => state.product.products);
  const prods = useSelector(productSelector.selectAll)

  
  const dispatch = useDispatch();

  const deleteHandler = () => {
    // const deletedArray = prods.filter(item => item.id !== props.id);
    // dispatch(productsActions.deleteHandler({products: deletedArray}));
    dispatch(removeOne(props.id))

  };
  const editHandler = () => {
    
    const deletedArray = products.filter(item => item.id !== props.id);
    dispatch(productsActions.deleteHandler({products: deletedArray}));

    dispatch(productsActions.editModal({name: props.name, cost: props.cost}));
  };
  return (
    <View style={styles.product}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.prize}>{`₹ ${props.cost}`} </Text>
      <Icon
        onPress={deleteHandler}
        style={styles.deleteIcon}
        name="closecircle"
      />
      <Icon onPress={editHandler} style={styles.editIcon} name="edit" />
    </View>
  );
};

export default Product;
