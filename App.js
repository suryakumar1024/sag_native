// import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View } from "react-native";
import InputForm from "./components/InputForm";
import RegisterForm from "./components/RegisterForm";
import { StyleSheet } from "react-native";

export default function App() {
const [onLoginPage, setOnLoginPage] = useState(true);
const onRegHandler = () => {
  // console.log("enter register page ");
  setOnLoginPage((prevstat)=>!prevstat)
};

  return (
    <View style={styles.container}>
       {onLoginPage && <InputForm onReg={onRegHandler} /> }
      {!onLoginPage && <RegisterForm onLog={onRegHandler} />} 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

