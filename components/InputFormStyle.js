import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1566",
  },

  inputCointainer: {
    alignItems: "center",
    position: "absolute",
    width: "80%",
    top: 150,
  },
  login: {
    fontSize: 80,
    marginVertical: 20,
    color: "#ffffff",
    textShadowColor: "#66BDD5",
    textShadowRadius: 5,
    textShadowOffset: { width: -6, height: 2 },
  },

  input: {
    marginVertical: 15,
    width: "80%",
    borderBottomColor: "#66BDD5",
    borderBottomWidth: 2,
    borderRadius: 5,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: "#00000050",

    fontSize: 20,
  },
  button: {
    borderRadius: 50,
  },
  regPara: {
    flexDirection: "row",
  },
  para: {
    color: "#66BDD5",
    fontSize: 20,
  },
});

export default styles;
