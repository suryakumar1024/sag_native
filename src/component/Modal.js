import {Modal, StyleSheet} from 'react-native';
import React from 'react';
import { useSelector} from 'react-redux';
import Add from './Add';

const ProductModal = () => {

  const showModal = useSelector(state => state.product.showModal);

  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={showModal}
      onRequestClose={() => {}}>
      <Add />
    </Modal>
  );
};

export default ProductModal;

