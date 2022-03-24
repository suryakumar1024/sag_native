import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles/venueDetails_style";

const VenueDetails = () => {
  return (
    <View style={styles.details}>
      <Image
        style={styles.logo}
        source={require("../media/header_right_logo.png")}
      />
      <View style={styles.detailsNameView}>
        <Text style={styles.detailsName}>El classico</Text>
        <Text style={styles.detailsLocation}>potheri</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.star}>4.0</Text>
        <Text style={styles.votes}>2 votes</Text>
      </View>
      <Text style={styles.location}>Potheri,SRM nagar.</Text>
      <View style={styles.reachOut}>
        <View style={styles.call}>
          <Text style={styles.callText}>Call</Text>
        </View>
        <View style={styles.directions}>
          <Text style={styles.directionsText}>Get Directions</Text>
        </View>
      </View>
    </View>
  );
};

export default VenueDetails;

