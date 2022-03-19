import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import EmptyTown from '../../component/EmptyTown';
import { storeData } from '../../utils/LocalStorage';
import { styles } from '../styles/home_style';


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

