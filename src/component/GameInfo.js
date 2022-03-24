import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";

const GameInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GAME INFO</Text>
      </View>
      <View style={styles.body}>
        <HStack mb='3'  justifyContent="space-between">
          <View style={styles.teamSize}>
            <Text style={styles.teamSizeText}>5s</Text>
            <Text style={styles.teamSizeText}>UPTO 5v5</Text>
          </View>
          <View style={styles.cageIcon}></View>
          <View style={styles.turf}></View>
        </HStack>
        <HStack justifyContent="space-between" >
          <View style={{alignItems:"center"}} >
            <Text>Size</Text>
            <Text>(Recommended)</Text>
          </View>
          <View style={{alignItems:"center"}} >
            <Text>Caged</Text>
            <Text>(No Outs)</Text>
          </View>
          <Text>Astro Truf</Text>
        </HStack>
      </View>
    </View>
  );
};

export default GameInfo;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  header: {
    height: "23%",
    backgroundColor: "#eee",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    // paddingVertical: 10,
    fontSize: 20,
    color: "#3B56E6",
    fontWeight: "700",
  },
  body: {
    // backgroundColor: "#b7a238",
    // height:'100%',
    // justifyContent: "center",
    height: "77%",
    padding: 15,
  },
  teamSize: {
    borderColor: "#6bc67f",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    padding: 5,
  },
  teamSizeText: {
    fontWeight: "500",
    fontSize: 15,
  },
  cageIcon: {
    backgroundColor: "#3B56E6",
    height: 50,
    width:50,},
  turf: {
    backgroundColor: "#3B56E6",
    height: 50,
    width:50,}
});
