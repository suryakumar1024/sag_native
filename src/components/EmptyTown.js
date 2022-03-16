import {Image, StyleSheet, Text, View} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import React from 'react';

const EmptyTown = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={[styles.emptyTextHeading, styles.text]}>
        Your Town's Empty
      </Text>
      <Text style={[styles.text, styles.textDetails]}>
        There are no games on your Town right now.
      </Text>
      <Image style={styles.logo} source={require('../media/football.png')} />

      <View style={styles.hostButton}>
        <Text style={styles.hostButtonText}>Host</Text>
      </View>
      <Text style={[styles.text, styles.textDetails]}>
        Host a game and invite your friends.
      </Text>
    </View>
  );
};

export default EmptyTown;

const styles = StyleSheet.create({
  emptyContainer: {
    position: 'relative',
    height: '65%',
    backgroundColor: '#2E46BA',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  emptyTextHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  textDetails: {
    marginVertical: 20,
    fontSize: 17,
  },
  logo: {
    height: '40%',
    width: '40%',
  },
  hostButton: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 30,
    backgroundColor: '#213cb7',
    borderWidth: 2,
    borderColor: '#3B56E6',
  },
  hostButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
