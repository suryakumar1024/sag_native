import { Dimensions, StyleSheet } from "react-native";

const fullHeight = Dimensions.get("window").height;
const fullWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: "#3B56E6",
    },
    header: {
      width: "100%",
      height: fullHeight * 0.15,
      paddingHorizontal: 10,
      paddingBottom: 5,
      // backgroundColor:'#fff',
  overflow:"hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
      margin: 0,
    },
    searchBar: {
      width: "100%",
      height: "35%",
      backgroundColor: "#2E46BA",
      marginVertical: 15,
      borderRadius: 20,
      alignItems: "baseline",
      flexDirection: "row",
      paddingLeft: 10,
    },
    textInput: {
      width: "80%",
      fontSize: 20,
      height: "100%",
    },
    scroll: {
      alignItems: "center",
    },
  });
  