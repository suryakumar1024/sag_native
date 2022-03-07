import { Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {postBill} from '../api-requests/api-request';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {productsActions} from '../redux-store/store';
import AddIcon from './AddIcon';
import { styles } from './styles/bottomBar-style';
import { Toast, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/core';



const BottomBar = props => {
  const productsArray = useSelector(state => state.product.products);
  const dispatch = useDispatch();
  const toast =useToast()
 const navigation= useNavigation()

  const postBillHandler = () => {
    if(productsArray.length!==0){
      postBill(productsArray);
      dispatch(productsActions.submitHandler());
    }else{
      toast.show( {title: 'Add item first',
    placement:'top'})
    }
  };

  const billsHandler=()=>{
navigation.navigate('billPage')
  }

  return (
    <View style={{width:'100%',alignItems:'center'}} >
        <AddIcon/>
      <View  style={styles.bottomButtonContainer}>
        <TouchableOpacity onPress={billsHandler} >
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>Bills</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={postBillHandler}>
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;


