import React, { useState } from "react";
import { View } from "react-native";
import InputForm from "./InputForm";
import RegisterForm from "./RegisterForm";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/store";
import LoggedInPage from "./LoggedInPage";

const MainPage = () => {
  const [onLoginPage, setOnLoginPage] = useState(true);
  const onLogin = useSelector((state) => state.user.onLogin);
  const isLogged = useSelector((state) => state.user.isLogged);

  const dispatch = useDispatch();
// 
//   https://api.publicapis.org/entries
//   
// 
const onRegHandler = () => {
    dispatch(userAction.formSwitch());
    //   setOnLoginPage((prevstat) => !prevstat);
  };
  return (
    <View style={styles.container}>
      {isLogged && <LoggedInPage />}

      {!isLogged && onLogin && <InputForm onReg={onRegHandler} />}
      {!isLogged && !onLogin && <RegisterForm onLog={onRegHandler} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainPage;
