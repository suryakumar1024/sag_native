import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {productsActions} from '../redux-store/store';

const Add = props => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState();

  const addItemHandler = () => {

    dispatch(
      productsActions.addProduct({
        products: {
          name: productName,
          cost: productCost,
        },
      }),
      productsActions.closeModal()
    );

dispatch(productsActions.closeModal())
   
  };
  const closeHandler = () => {
   dispatch(productsActions.closeModal())
  };
  return (

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
        <TouchableOpacity onPress={closeHandler}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
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
