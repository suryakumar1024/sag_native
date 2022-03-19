import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles/hostButton_style'

const HostButton = (props) => {

  return (
    <View style={[styles.hostButton,props.styles]}>
    <Text style={styles.hostButtonText}>{props.name}</Text>
  </View>
  )
}

export default HostButton
