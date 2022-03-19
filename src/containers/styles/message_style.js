import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    messageBody: {
      paddingHorizontal: 10,
      height: '85%',
      width: '100%',
    },
    createClub: {
      position: 'relative',
      height: 90,
      width: '100%',
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: 'rgb(221, 195, 218)',
    },
    createClubLogo: {
      height: 50,
      width: 50,
      position: 'absolute',
      left: 10,
      top: 10,
    },
    createClubHeading: {
      fontSize: 25,
      color: '#b942c9',
      position: 'absolute',
      top: 10,
      left: 81,
    },
    createClubText: {
      fontSize: 18,
      position: 'absolute',
      bottom: 20,
      right: 15,
    },
    hostButton: {
      paddingHorizontal: 25,
      paddingVertical: 5,
      borderRadius: 30,
      // backgroundColor: '#213cb7',
      borderWidth: 1,
      borderColor: '#9b9b9b',
    },
    hostButtonText: {
      // color: '#fff',
      fontSize: 20,
      fontWeight: '700',
    },
  });
  