import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottomButtonContainer: {
      bottom: 20,
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 70,
      width: '95%',
    },
    buttons: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      width: 110,
      height: '70%',
      borderRadius: 10,
      marginHorizontal: 20,
    },
    buttonText: {
      fontSize: 20,
    },
  });