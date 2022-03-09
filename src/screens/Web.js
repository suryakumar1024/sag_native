import {WebView} from 'react-native';
import React from 'react';

const Web = () => {
  return (
    <WebView
      source={{
        uri: 'https://github.com/facebook/react-native',
      }}
      style={{marginTop: 20}}
    />
  );
};

export default Web;
