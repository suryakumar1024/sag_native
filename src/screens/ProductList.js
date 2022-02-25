import {Alert, Modal, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './productList-style';
import AddButtons from '../component/AddButtons';
import Add from '../component/Add';
import AddIcon from '../component/AddIcon';
import Product from '../component/Product';
import ProductContext from '../store/ProductContext';

const ProductList = props => {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(ProductContext);

  // check for updated array in context
  
  console.log('context value',ctx);

  // const showModalHandler = () => {
  //   setShowModal(true);
  // };

  // const closeModalHandler = () => {
  //   setShowModal(false);
  // };

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
        {/* <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {}}>
          <Add closeModal={closeModalHandler} />
        </Modal> */}

        <Add />

        {ctx.items.map(item => (
          <Product key={Math.random()} cost={item.cost} name={item.name} />
        ))}
      </ScrollView>
      <AddButtons />
      <AddIcon
      //  modal={showModalHandler}
        />
    </View>
  );
};
export default ProductList;
