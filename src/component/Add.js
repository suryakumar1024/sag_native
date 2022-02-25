import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import ProductProvider from '../store/ProductProvider';

const Add = props => {
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState();
  const [product, setProduct] = useState([]);

  const addItemHandler = () => {
    // updating product array in add component

    setProduct(items => {
      return [...items, {name: productName, cost: productCost}];
    });
    console.log('in add modal', product);

    // props.closeModal()

  };
  // const closeHandler = () => {
  //   props.closeModal();
  // };
  return (
// passing updated array to context api through value prop 

    <ProductProvider value={{items: product}}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Product name"
          style={styles.productInput}
          onChangeText={e => setProductName(e)}
        />
        <TextInput
          placeholder="Amount"
          keyboardType="numeric"
          style={styles.productInput}
          onChangeText={e => setProductCost(e)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={addItemHandler}>
            <Text>Add item</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={closeHandler}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ProductProvider>
  );
};

export default Add;

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    // elevation:5,
    // backgroundColor:'#000',
    // shadowOffset:{width:1,height:1},
    // shadowColor:'#000',
    // shadowRadius:5
  },
  productInput: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '500',
  },
});
