import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import IconEi from "react-native-vector-icons/EvilIcons";
import { HStack, ScrollView } from "native-base";
import { styles } from "../styles/search_style";
import HostButton from "../../component/HostButton";
import CarouselCards from "../../component/CarouselCards";




const Search = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <View style={{ overflow: "hidden", paddingBottom: 5 }}> */}
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <IconEi name="search" size={30} color="#eee" />
            <TextInput style={styles.textInput} />
          </View>
          <ScrollView
            contentContainerStyle={styles.scroll}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <HStack space={3}>
              <HostButton name="football" />
              <HostButton name="basketball" />
              <HostButton name="tennis" />
              <HostButton name="basketball" />
            </HStack>
          </ScrollView>
        </View>
        <CarouselCards/>
      {/* </View> */}
    </View>
  );
};

export default Search;

