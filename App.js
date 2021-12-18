// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./components/store/store";
import MainPage from "./components/MainPage";

export default function App() {
 

  return (
    <Provider store={store}>
       <MainPage/>
    </Provider>
  );
}

