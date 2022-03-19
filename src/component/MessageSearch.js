import {Icon, Input} from 'native-base';
import IconEi from 'react-native-vector-icons/EvilIcons';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getData} from '../utils/LocalStorage';
import { styles } from './styles/messageSearch_style';


const MessageSearch = () => {
  const showData = async() => {
    // debugger;
    const e = await getData('id');
    console.log(e);
  };
  return (
    <View style={styles.header}>
      <Input
        variant={'outline'}
        borderRadius={30}
        background={'#eee'}
        borderColor={'#9b9b9b'}
        width={'75%'}
        placeholder="Search for townies and club"
        fontSize={17}
        InputLeftElement={
          <Icon ml="3" as={<IconEi name="search" size={30} />} />
        }
      />
      <IconMci onPress={showData} name="chat-plus" size={40} />
    </View>
  );
};

export default MessageSearch;
