import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {storeData} from '../utils/LocalStorage';
import {Trans, useTranslation} from 'react-i18next';
import { styles } from './styles/emptyTown_style';

const EmptyTown = () => {
  const {t, i18n} = useTranslation('common');

  const asyncSet = () => {
    // change language to french (default is english)
    
    i18n.changeLanguage('fr');

  };
  return (
    <View style={styles.emptyContainer}>
      <Text style={[styles.emptyTextHeading, styles.text]}>
        {t('title')}
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


