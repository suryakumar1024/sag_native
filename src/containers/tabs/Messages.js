import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MessageSearch from '../../component/MessageSearch';
import IconAd from 'react-native-vector-icons/AntDesign';
import {HStack} from 'native-base';
import { styles } from '../styles/message_style';

const Messages = () => {
  return (
    <View style={styles.mainContainer}>
      <MessageSearch />
      <View style={styles.messageBody}>
        <View style={styles.createClub}>
          <Image
            style={styles.createClubLogo}
            source={require('../../media/ball.png')}
          />
          <Text style={styles.createClubHeading}>
            Create a club <IconAd name="arrowright" size={20} />
          </Text>
          <Text style={styles.createClubText}>
            Invite players and grow your circle
          </Text>
        </View>
        <HStack marginY='5' space={3} >
          <View style={styles.hostButton}>
            <Text style={styles.hostButtonText}>All</Text>
          </View>
          <View style={styles.hostButton}>
            <Text style={styles.hostButtonText}>Clubs</Text>
          </View>
          <View style={styles.hostButton}>
            <Text style={styles.hostButtonText}>Games</Text>
          </View>
        </HStack>
      </View>
    </View>
  );
};

export default Messages;

