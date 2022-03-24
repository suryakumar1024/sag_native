import React, { useRef, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
// import data from './data'
const width = Dimensions.get('window').width

const data = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];

const CarouselCards = () => {
  // const isCarousel = React.useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const alertp = (e) => {
  //   alert(e);
  // };

  return (
    // <View
    //   style={{
    //     flexDirection: "row",
    //     justifyContent: "center",
       
    //   }}
    // >
      <Carousel
        layout={"default"}
        // ref={isCarousel}
        data={data}
        sliderWidth={width-20}
        itemWidth={width-20}
        renderItem={CarouselItem}
        // onSnapToItem={index=>setActiveIndex(index)}
      />
    // </View>
  );
};

export default CarouselCards;