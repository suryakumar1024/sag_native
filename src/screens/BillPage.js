import { StyleSheet,  Text,  View } from 'react-native'
import React from 'react'

const BillPage = () => {
  return (
  
    <View style={styles.container}>
   
     <Text style={{fontSize:50}} > bill page</Text>
    </View>
  )
}

export default BillPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    position:'relative',
alignItems:'center'  }
})