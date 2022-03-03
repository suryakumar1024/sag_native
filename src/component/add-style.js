import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor:'#eee',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
      borderRadius: 10,
      height: 300,
      padding: 10,
      justifyContent: 'center',
      backgroundColor: '#fff',
      
    },
    productInput: {
      backgroundColor: '#eee',
      marginTop: 20,
      borderRadius: 10,
      paddingHorizontal: 20,
      fontSize: 20,
      fontWeight: '500',
      
    },
    buttonsContainer: {
      // backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 50,
      marginTop: 20,
      width: '100%',
    },
    buttons: {
      backgroundColor: '#5391f5',
      height: '100%',
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText:{
      fontSize:20,
      fontWeight:'500',
      color:'#000'
    }
  });