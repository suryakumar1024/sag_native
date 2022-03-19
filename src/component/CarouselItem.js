import React from "react"
import { Text, View } from "react-native"
import { styles } from "./styles/carouselItem_style"

const  CarouselItem =({item,index})=>{

  return (
    <View style={styles.item}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  )
}
export default CarouselItem