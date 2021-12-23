// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./components/store/store";
import MainPage from "./components/MainPage";
import { NativeRouter } from "react-router-native";

export default function App() {
 

  return (
    <Provider store={store}>
      <NativeRouter>
       <MainPage/>
      </NativeRouter>
    </Provider>
  );
}

