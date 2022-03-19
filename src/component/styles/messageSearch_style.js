import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: windowHeight / 10,
      borderBottomColor: '#9b9b9b',
      borderBottomWidth: 1,
    },
  });
  