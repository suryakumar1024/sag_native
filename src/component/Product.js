import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './product-style';

const Product = props => {
  return (
    <View style={styles.product}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.prize}>{props.cost} </Text>
    </View>
  );
};

export default Product;
