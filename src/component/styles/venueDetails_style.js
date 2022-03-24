import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    details: {
      height: 200,
      marginBottom: 20,
      marginTop:20,
    //   backgroundColor: "#ddc3da",
      position: "relative",
      paddingTop: 10,
    },
    logo: {
      height: 30,
      width: 30,
      position:"absolute",
      top:10,
      left:10
    },
    detailsNameView: {
      display: "flex",
      alignItems: "center",
      alignSelf: "center",
      
    },
    detailsName: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "700",
    },
    detailsLocation: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "700",
    },
    rating: {
      position: "absolute",
      right: 10,
      top: 10,
    },
    star: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "700",
    },
    votes: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "700",
    },
    location: {
      color: "#fff",
      alignSelf: "center",
      fontSize: 20,
      marginVertical: "5%",
      fontWeight: "700",
    },
    reachOut: {
      alignSelf: "center",
      flexDirection: "row",
    },
    call: {
      padding: 10,
      backgroundColor: "#2E46BA",
      marginRight: 10,
      borderRadius: 5,
    },
    callText: {
      fontSize: 20,
      color: "#fff",
      fontSize: 20,
      fontWeight: "700",
    },
    directions: {
      padding: 10,
      backgroundColor: "#2E46BA",
      borderRadius: 5,
    },
    directionsText: {
      fontSize: 20,
      color: "#fff",
      fontSize: 20,
      fontWeight: "700",
    },
  });
  