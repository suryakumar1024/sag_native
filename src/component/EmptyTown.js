import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {storeData} from '../utils/LocalStorage';
import { Trans, useTranslation } from 'react-i18next';

const EmptyTown = () => {
   const {t,i18n}= useTranslation();

  const asyncSet = () => {
     storeData('id', 'stored data');
  };
  return (
    <View style={styles.emptyContainer}>
      <Text style={[styles.emptyTextHeading, styles.text]}>
        {/* Your Town's Empty */}
        {/* {t('title')} */}
        <Trans>title</Trans>
      </Text>
      <Text style={[styles.text, styles.textDetails]}>
        There are no games on your Town right now.
      </Text>
      <Image style={styles.logo} source={require('../media/football.png')} />
      <TouchableOpacity onPress={asyncSet}>
        <View style={styles.hostButton}>
          <Text style={styles.hostButtonText}>Host</Text>
        </View>
      </TouchableOpacity>
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
