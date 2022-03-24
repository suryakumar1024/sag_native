import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Box, HStack, VStack } from "native-base";
import { styles } from "./styles/venueItem_style";
import { useNavigation } from "@react-navigation/native";

const VenueItem = (props) => {
  const item=props.item.item
  const venueGalleryNavigate = () => {
    props.navigate("venueGallery");
  };
  return (
    <TouchableOpacity onPress={venueGalleryNavigate}>
      <Box
        tyle={styles.venueBox}
        paddingX="4"
        paddingY="8"
        borderBottomWidth="1"
        borderColor="gray.600"
      >
        <HStack>
          <View style={styles.avatar}>
            <Avatar
              borderWidth="2"
              borderColor="white"
              size="xl"
              bg="darkBlue.600"
            />
          </View>
          <View style={styles.venueDetails}>
            <VStack>
              <Text style={styles.venueName}>{item.name}</Text>
              <Text style={styles.venueLocation}>{item.location}</Text>
            </VStack>
            <HStack style={styles.venueExtraDetails}>
              <View style={styles.rate}>
                <Text>{item.prize}</Text>
              </View>
              <View style={styles.rate}>
                <Text>{item.distance}</Text>
              </View>
            </HStack>
          </View>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default VenueItem;
