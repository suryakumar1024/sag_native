import {nanoid} from '@reduxjs/toolkit';
import {Button, FormControl, Input, Modal, Toast} from 'native-base';
import React, {Fragment, useState} from 'react';
import {Appearance} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addOne} from '../redux-store/ProductSlice2';
import {productsActions} from '../redux-store/store';

const ModalBase = () => {
  const showModal = useSelector(state => state.product.showModal);
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState();
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [nameError, setNameError] = useState();
  const [costError, setCostError] = useState();

  Appearance.addChangeListener(mode => {
    setTheme(mode.colorScheme);
  });

  const addItemHandler = () => {
    debugger;
    if (productName.trim().length !== 0 && productCost.trim().length !== 0) {
      setNameError();
      if (!+productCost) {
        return setCostError('Cost must be number');
      }
      setCostError();

      dispatch(addOne({id: nanoid(), name: productName, cost: productCost}));

      dispatch(productsActions.closeModal());
      setProductName('');
      setProductCost();
      Toast.show({
        description: 'Item was successfully added.',
      });
    }
    if (productName === undefined || productName.trim().length === 0) {
      setNameError('Name must not be empty');
    }

    if (productCost === undefined || productCost.trim().length === 0) {
      setCostError('Cost must not be empty');
    }
  };

  const closeHandler = () => {
    dispatch(productsActions.closeModal());
    setCostError();
    setNameError();
  };

  return (
    <Fragment>
      <Modal isOpen={showModal} onClose={closeHandler}>
        <Modal.Content bg={theme === 'dark' ? '#4e4f4c' : '#eee'}>
          <Modal.CloseButton />
          <Modal.Header>Add item</Modal.Header>
          <Modal.Body>
            <FormControl isRequired={true} isInvalid={nameError !== undefined}>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Name of the product"
                value={productName}
                onChangeText={e => setProductName(e)}
              />
              {nameError ? (
                <FormControl.ErrorMessage>{nameError}</FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{fontSize: 'xs'}}>
                  Enter name of the product
                </FormControl.HelperText>
              )}
            </FormControl>
            <FormControl
              isRequired={true}
              isInvalid={costError !== undefined}
              mt="3">
              <FormControl.Label>Cost</FormControl.Label>
              <Input
                placeholder="Cost of the product"
                keyboardType="numeric"
                value={productCost}
                onChangeText={e => setProductCost(e)}
              />
              {costError ? (
                <FormControl.ErrorMessage>{costError}</FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{fontSize: 'xs'}}>
                  Cost must be in numeric
                </FormControl.HelperText>
              )}
            </FormControl>
            <Modal.Footer bg={theme === 'dark' ? '#4e4f4c' : '#eee'}>
              <Button.Group>
                <Button onPress={closeHandler} variant="ghost">
                  Close
                </Button>
                <Button onPress={addItemHandler}>Add</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Fragment>
  );
};

export default ModalBase;
