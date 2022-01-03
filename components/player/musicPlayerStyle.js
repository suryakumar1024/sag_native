import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // width:'100%',
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'#4d65dd',
  },
  innerContainer: {
    height: "80%",
    width: 300, /// width is responsive with whole screen in percentage
    // backgroundColor:'#d81e1e'
  },
  topBar: {
    padding: 7,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    // backgroundColor: "#d6bb6b",
  },
  home: {
    // justifyContent:'flex-start',
  },
  musicTopLabel: {
    marginLeft: 30,
    fontWeight: "700", /// no other number work except 700 in font weight
    // fontWeight:'bold',
    fontSize: 30,
  },

  playerImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    backgroundColor: "#898989",
  },
  songNameBox: {
    height: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  songName: {
    fontSize: 20,
  },
  audioControl: {
    flexDirection: "row",

    // alignItems:'baseline',
    position: "absolute",
    bottom: 10,
    left: 40,
  },
  play: {
    marginHorizontal: 30,
  },
});
export default style;
