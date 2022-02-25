import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './addIcon-style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddIcon = (props) => {
    const addProductHandler=()=>{
        // props.navigation.navigate('addProduct')
        props.modal()
    }
  return (
      <View style={styles.icon}>
          <TouchableOpacity onPress={addProductHandler} >
        <Icon name="add" size={50} color="#000" />
    </TouchableOpacity>
      </View>
  );
};

export default AddIcon;
