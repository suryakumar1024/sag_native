import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AddButtons = (props) => {
  return (
    <View style={styles.sendProduct}>
      <TouchableOpacity>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>Add more </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.submit} >
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddButtons;

const styles = StyleSheet.create({
  sendProduct: {
  bottom:20,
    position:'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    width:'100%'
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    width: 110,
    height: '70%',
    borderRadius: 10,
    
  },
  buttonText: {
    fontSize: 20,
  },
});
