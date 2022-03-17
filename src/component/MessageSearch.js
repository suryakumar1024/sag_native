import {Icon, Input} from 'native-base';
import IconEi from 'react-native-vector-icons/EvilIcons';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get('window').height;
// const Height = Dimensions.get('screen').height;


const MessageSearch = () => {
  return (
    <View style={styles.header}>
        <Input
          variant={'filled'}
          borderRadius={30}
          borderColor={'#9b9b9b'}
          width={'75%'}
          placeholder="Search for townies and club"
          fontSize={17}
          InputLeftElement={
            <Icon ml="3" as={<IconEi name="search" size={30} />} />
          }
        />
        <IconMci name="chat-plus" size={40} />
      </View>
  )
}

export default MessageSearch

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height:windowHeight/10 ,
        // height:Height/10 ,

        borderBottomColor: '#9b9b9b',
        borderBottomWidth: 1,
      },
})