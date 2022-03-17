import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EmptyTown from '../../component/EmptyTown';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={styles.hostButton}>
          <Text style={styles.hostButtonText}>Host</Text>
        </View>
        <Image
          style={styles.titleLogo}
          source={require('../../media/header_right_logo.png')}
        />
        <Image
          style={styles.titleLogoRight}
          source={require('../../media/header_right_logo.png')}
        />
      </View>

      <EmptyTown />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#3B56E6',
  },
  header: {
    paddingHorizontal:10,
    height: '10%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
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
    width: 90,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: '#213cb7',
    // borderColor: '#3B56E6',
  },
  hostButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleLogo: {
    height: 30,
    width: 80,
    marginLeft:-30

  },
  titleLogoRight: {
    height: 30,
    width: 30,

  },
});
