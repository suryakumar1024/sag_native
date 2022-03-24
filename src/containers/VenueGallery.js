import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";
import VenueDetails from "../component/VenueDetails";
import GameInfo from "../component/GameInfo";

const width = Dimensions.get("window").width;

const info = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const imageCarousel = ({ item }) => {
  return (
    <View style={styles.imageView}>
      <Image style={styles.image} source={require("../media/ground.jpg")} />
    </View>
  );
};

const VenueGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainCointainer}>
      <Carousel
        layout={"default"}
        data={info}
        sliderWidth={width}
        itemWidth={width}
        renderItem={imageCarousel}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />
      <Pagination
        dotsLength={info.length}
        activeDotIndex={currentIndex}
        containerStyle={{ paddingVertical: 10, marginTop: 0 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -2,
          backgroundColor: "#fff",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
      />
      <View style={styles.galleryDetailsContainer}>
        <VenueDetails />
        <GameInfo/>
        
      </View>
    </ScrollView>
  );
};

export default VenueGallery;

const styles = StyleSheet.create({
  mainCointainer: {
    flexGrow: 1,
    backgroundColor: "#3B56E6",
  },
  imageView: {
    height: 200,
    // padding: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  galleryDetailsContainer: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
});
