import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MessageSearch from '../../component/MessageSearch';
import IconAd from 'react-native-vector-icons/AntDesign';
import {HStack} from 'native-base';

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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  messageBody: {
    paddingHorizontal: 10,
    height: '85%',
    width: '100%',
  },
  createClub: {
    position: 'relative',
    height: 90,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgb(221, 195, 218)',
  },
  createClubLogo: {
    height: 50,
    width: 50,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  createClubHeading: {
    fontSize: 25,
    color: '#b942c9',
    position: 'absolute',
    top: 10,
    left: 81,
  },
  createClubText: {
    fontSize: 18,
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
  hostButton: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 30,
    // backgroundColor: '#213cb7',
    borderWidth: 1,
    borderColor: '#9b9b9b',
  },
  hostButtonText: {
    // color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
