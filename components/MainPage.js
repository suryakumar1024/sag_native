import React from "react";
import { View } from "react-native";
import RegisterForm from "./RegisterForm";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LoggedInPage from "./LoggedInPage";
import { Navigate, Route, Routes } from "react-router-native";
import LoginForm from "./LoginForm";
import Songs from "./MusicPlayer";

const MainPage = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  //
  //   https://api.publicapis.org/entries
  //
  //
  return (
    <View style={styles.container}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/welcome" element={<LoggedInPage />} />
        <Route path='/songs' element={<Songs/> } />
      </Routes>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainPage;
