import { View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles/addIcon-style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {productsActions} from '../redux-store/store';
import { addOne } from '../redux-store/ProductSlice2';
import { nanoid } from '@reduxjs/toolkit';

const AddIcon = props => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(productsActions.openModal());
  };

  return (
    <View style={styles.icon}>
      <TouchableOpacity onPress={addProductHandler}>
        <Icon name="add" size={50} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default AddIcon;
