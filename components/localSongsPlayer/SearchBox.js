import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { userAction } from "../store/store";

const SearchBox = (props) => {
  const dispatch = useDispatch();
  const allSongs = props.allSongs;

  const searchHandler = (text) => {
    if (text.trim().length !== 0) {
      // Inserted text is not blank

      const newData = allSongs.filter(function (item) {
        const itemData = item.filename.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      dispatch(userAction.getFilteredSongs(newData));
    } else {
      // Inserted text is blank

      dispatch(userAction.getFilteredSongs(allSongs));
    }
  };

  return (
    <TextInput
      placeholder="search songs"
      style={style.search}
      onChangeText={(text) => searchHandler(text)}
    />
  );
};
const style = StyleSheet.create({
  search: {
    borderBottomColor: "#000000",
    borderWidth: 1,
    width: 300,
    margin: 5,
  },
});

export default SearchBox;
