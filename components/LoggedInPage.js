import React, { Fragment } from "react";
import axios from "axios";
import {
  Button,
  Text,
  View,
  Alert,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/store";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import * as MediaLibrary from "expo-media-library";

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
    console.log(permission);

    // Object {
    //   "canAskAgain": true,
    //   "expires": "never",
    //   "granted": true,
    //   "status": "granted",
    // }

    if (permission.granted) {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
      });
      const audio = media.assets;
      dispatch(userAction.getLocalAudio(audio));

    }
    if (!permission.granted && permission.canAskAgain) {
      // get permission

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
      console.log("denied");
      Alert.alert('Denied permission','open settings and allow storage permission to continue',[{text:'ok' ,onPress:()=>navigate('/')}])
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
  return (
    <Fragment>
      <View>
        <Text>{name}</Text>
        <Text>{password}</Text>
        <Button onPress={logoutHandler} title="logout" />
        <Button onPress={showSongs} title="songs" />
      </View>
      <ScrollView>
        {onlyMp3.map((e) => (
          <Text style={style.audio} key={e.id}>
            {e.filename}
          </Text>
        ))}
      </ScrollView>
    </Fragment>
  );
};

const style = StyleSheet.create({
  audio: {
    padding: 5,
    fontSize: 20,
  },
});

export default LoggedInPage;
