import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EmptyTown from '../../components/EmptyTown';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
      <View style={styles.hostButton}>
        <Text style={styles.hostButtonText}>Host</Text>
      </View>
      </View>

      <EmptyTown />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent:'center',
    flex: 1,
    backgroundColor: '#3B56E6',
    // justifyContent:'center'
  },
  header: {
    height: '10%',
    justifyContent:'center',
    width:'100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  hostButton: {
    width:'20%',
    paddingHorizontal: 10,
    // paddingVertical: 5,
    borderRadius: 30,
    // textAlign:'center',
    backgroundColor: '#213cb7',
    // borderWidth: 2,
    borderColor: '#3B56E6',
    // width:60
  },
  hostButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',

  },
});
