import React from "react";
import { View } from "react-native";
import RegisterForm from "./RegisterForm";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LoggedInPage from "./LoggedInPage";
import { Route, Routes } from "react-router-native";
import LoginForm from "./LoginForm";

const MainPage = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  //
  //   https://api.publicapis.org/entries
  //
  //
  return (
    <View style={styles.container}>
      {!isLogged && (
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      )}

      {isLogged && <LoggedInPage />}
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
