import {StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const BillPage = () => {
  return (
    <WebView
      source={{
        uri: 'https://www.npmjs.com/package/react-native-webview',
      }}
    />
  );
};

export default BillPage;


