import React, { Fragment } from "react";
import axios from "axios";
import { Button, Text, View, Alert, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/store";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import LocalPlayer from "./localSongsPlayer/LocalPlayer";
import SearchBox from "./localSongsPlayer/SearchBox";

// to get new token
// https://developer.spotify.com/console/get-playlist/

const accessToken =
  "BQDTa0FmQvfIH1A0DvbP7r-1qpOvnE6JXaD7RxvSTKrcTWAChwPBn5yPJLn-fjUlmKm4Kc9ljWSKRAhRtvUeyeJsZi2aYJhw8TwqE2oPNcltuPuX3yr6MqUPY56ErA0hF3K9KcpOG7hzev_VM2D4EZUg2aWJupUG4xE";

const LoggedInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.userName);
  const password = useSelector((state) => state.user.password);
  const localSongs = useSelector((state) => state.user.localSongs);

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();

    if (permission.granted) {
      ///   got permission

      const media = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
      });
      const audio = media.assets;
      dispatch(userAction.getLocalAudio(audio));
    }

    if (!permission.granted && permission.canAskAgain) {
      //   get permission

      Alert.alert("Permission required", "allow permission to continue", [
        {
          text: "ok",
          onPress: () => {
            MediaLibrary.requestPermissionsAsync();
          },
        },
        {
          text: "cancel",
          onPress: () => {
            navigate("/");
          },
        },
      ]);
    }
    if (!permission.granted && !permission.canAskAgain) {
      ///   have to change permission manually

      Alert.alert(
        "Denied permission",
        "open settings and allow storage permission to continue",
        [{ text: "ok", onPress: () => navigate("/") }]
      );
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://api.spotify.com/v1/playlists/3vTVQzTLZEgGpqGuVucPkB", {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   })
    //   .then((res) => {
    //     const tracks = res.data.tracks.items;
    //     dispatch(userAction.getSongs(tracks));
    //   })
    //   .catch((err) => console.log(err));
    // console.log("fetch");
    getPermission();
  }, [dispatch]);

  const showSongs = () => {
    navigate("/songs");
  };

  const logoutHandler = () => {
    navigate("/");
  };
  let onlyMp3 = localSongs.filter((file) =>
    ["mp3"].includes(file.filename.split(".").pop())
  );

  // console.log(onlyMp3);
  return (
    <Fragment>
      <View>
        <Text>{name}</Text>
        <Text>{password}</Text>
        <Button onPress={logoutHandler} title="logout" />
        <Button disabled={true} onPress={showSongs} title="songs" />
        <SearchBox allSongs={onlyMp3} />
      </View>
      <LocalPlayer songs={onlyMp3} />
    </Fragment>
  );
};

export default LoggedInPage;
