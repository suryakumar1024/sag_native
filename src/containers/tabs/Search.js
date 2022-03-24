import { FlatList, Text, TextInput, View } from "react-native";
import React from "react";
import IconEi from "react-native-vector-icons/EvilIcons";
import { HStack, ScrollView } from "native-base";
import { styles } from "../styles/search_style";
import HostButton from "../../component/HostButton";
import CarouselCards from "../../component/CarouselCards";
import VenueItem from "../../component/VenueItem";
import { useNavigation } from "@react-navigation/core";

const venueList = [
  {
    name: "chepak stadium",
    location: "potheri",
    prize: "$100",
    distance: "35.7 km",
  },
  {
    name: "gandhi stadium",
    location: "perungalathur",
    prize: "$150",
    distance: "20.4 km",
  },
  {
    name: "modi stadium",
    location: "selayur",
    prize: "$70",
    distance: "5.1 km",
  },
];

const Search = () => {
  const navigation = useNavigation();

  const navigate = (e) => {
    navigation.navigate(e);
  };

  return (
    <View style={styles.mainContainer}>
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
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        <CarouselCards />
        <Text style={styles.veneusAround}>Venues Around You</Text>
        <FlatList
          style={styles.venues}
          data={venueList}
          renderItem={(item) => <VenueItem item={item} navigate={navigate} />}
          // navigate={navigate}
          keyExtractor={(item) => item.name}
        ></FlatList>
      </ScrollView>
    </View>
  );
};

export default Search;
