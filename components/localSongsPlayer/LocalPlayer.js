import React from "react";
import { Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const LocalPlayer = (props) => {
  const filteredSongs = useSelector((state) => state.user.filteredSongs);

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity style={style.audioContainer}>
        <Text style={style.audioName}>{item.filename}</Text>
      </TouchableOpacity>
    );
  };
  //filtered songs are empty array at initial
  return (
    <FlatList
      data={filteredSongs.length !== 0 ? filteredSongs : props.songs}
      renderItem={ItemView}
    />
  );
};
const style = StyleSheet.create({
  audioContainer: {
    padding: 5,
  },
  audioName: {
    fontSize: 20,
  },
});
export default LocalPlayer;
