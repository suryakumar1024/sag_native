import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles/product-style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {productSelector, removeOne} from '../feature/products';

const Product = props => {
  const prods = useSelector(productSelector.selectAll);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeOne(props.id));
  };
  const editHandler = () => {
    console.log('edit handler');
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
