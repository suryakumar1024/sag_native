import React from "react";
import axios from "axios";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/store";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";

// to get new token
// https://developer.spotify.com/console/get-playlist/

const accessToken =
'BQBmJYhyvS935rWN39pqqgyaq1_zQc_kanhggodNx2UrVFwXfTXHybCahHKo7H1CSjmX-wVzlh67cNmkeIu-R46T7WMu-bkEgoL3PhhPT8G57i0vaa6AXkjGVSXTOXqvkUQ5yW_uZjc1Vkr-jHCzO5bAeRb4BjmJa9s';
const LoggedInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.userName);
  const password = useSelector((state) => state.user.password);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/playlists/3vTVQzTLZEgGpqGuVucPkB", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        const tracks = res.data.tracks.items;
        dispatch(userAction.getSongs(tracks));
      })
      .catch((err) => console.log(err));
    console.log("fetch");
    
  }, [dispatch]);

  const showSongs = () => {
    navigate("/songs");
  };

  const logoutHandler = () => {
    navigate("/");
  };
  
  return (
    <SafeAreaView>
      <View>
        <Text>{name}</Text>
        <Text>{password}</Text>
        <Button onPress={logoutHandler} title="logout" />
        <Button onPress={showSongs} title="songs" />
      </View>
    </SafeAreaView>
  );
};

export default LoggedInPage;
