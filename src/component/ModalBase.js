import {Button, FormControl, Input, Modal, Toast} from 'native-base';
import React, {Fragment, useState} from 'react';
import {Appearance} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {productsActions} from '../redux-store/store';

const ModalBase = () => {
  const showModal = useSelector(state => state.product.showModal);
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState('');
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(mode => {
    setTheme(mode.colorScheme);
  });
  // console.log(theme);

  const addItemHandler = () => {
    if (productName.trim().length !== 0 && productCost.trim().length !== 0) {
      dispatch(
        productsActions.addProduct({
          products: {
            name: productName,
            cost: productCost,
            id: Math.floor(Math.random() * 100000000 + 1),
          },
        }),
      );

      dispatch(productsActions.closeModal());
      setProductName('');
      setProductCost('');
      Toast.show({
        description: 'Item was successfully added.',
      });
    } else {
      alert('Enter name and cost first');
    }
  };

  const closeHandler = () => {
    dispatch(productsActions.closeModal());
  };
  return (
    <Fragment>
      <Modal isOpen={showModal} onClose={closeHandler}>
        <Modal.Content
          bg={theme==='dark'?"#4e4f4c":'#eee'}
          // _light={{backgroundColor:'#000'}}
          // _dark={{backgroundColor:'#fff'}}
        >
          <Modal.CloseButton  />
          <Modal.Header>Add item</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Name of the product"
                value={productName}
                onChangeText={e => setProductName(e)}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Cost</FormControl.Label>
              <Input
                placeholder="Cost of the product"
                keyboardType="numeric"
                value={productCost}
                onChangeText={e => setProductCost(e)}
              />
            </FormControl>
            <Modal.Footer
            bg={theme==='dark'?"#4e4f4c":'#eee'}
            >
              <Button.Group>
                <Button onPress={closeHandler} variant="outline">
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
