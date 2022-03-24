import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    venueBox: {},
    venueDetails: {
      backgroundColor: "#eee",
      width: "80%",
      left: -40,
      zIndex: 1,
      paddingLeft: 55,
      height: "70%",
      paddingVertical: 7,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      position: "relative",
    },
    avatar: {
      zIndex: 3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    venueName: {
      fontSize: 20,
      fontWeight: "700",
      color: "#2E46BA",
    },
    venueLocation: {
      fontSize: 15,
    },
    venueExtraDetails: {
      position: "absolute",
      width:'100%',
      bottom:-35,
      left:'17%',
      alignItems:"center"
    },
    rate:{
      width:'50%',
      backgroundColor:'#eee',
      marginHorizontal:5,
      paddingVertical:2,
      alignItems:"center",
      borderRadius:5
    }
  });
  