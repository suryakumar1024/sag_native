import {StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { getBills } from '../request-factory/request-factory';
import { Center, Text, View } from 'native-base';

const BillPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBills());
  }, []);

  // product bills fetching is done in productSlice2

  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

   <Text>Go back to view the list of first bill</Text>
  </View>
  );
};

export default BillPage;
