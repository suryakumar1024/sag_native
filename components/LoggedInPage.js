import React, { useEffect, useState } from "react";
import { Button, Linking, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/store";
import axios from "axios";
import { ScrollView } from "react-native-web";

// to get new token
// https://developer.spotify.com/console/get-playlist/

const accessToken =
  "BQBEAwN0w0aoQck-5BHpGbMgI7CKBvMO9vZMIafrBvyClTNUffHd1XpxpUnRU7mIEbUrGuJHHk52lmmlXDNNqr_8OnmGYmqzi4qmmjZlxgRc0s9COEyPVVH7Nc3LKRhiyv97WYQqqYPL6fYhQTweg2pRt8h8tq7sxxk";

const LoggedInPage = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(0);
  const name = useSelector((state) => state.user.userName);
  const password = useSelector((state) => state.user.password);
  const songs = useSelector((state) => state.user.songs);
  const showSong = useSelector((state) => state.user.showSong);

  const song = songs.map((song) => {
    return {
      id: song.track.id,
      name: song.track.name,
      prevUrl: song.track.preview_url,
      songUrl: song.track.external_urls.spotify,
    };
  });
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
    console.log("fetch req sent");
  }, [dispatch]);

  const showSongs = () => {
    dispatch(userAction.showSong());
  };

  const logoutHandler = () => {
    dispatch(userAction.onLogout());
  };
  return (
    <SafeAreaView>
      <View>
        <Text>{name}</Text>
        <Text>{password}</Text>
        <Button onPress={logoutHandler} title="logout" />
        <Button onPress={showSongs} title="songs" />
      </View>
      {showSong && (
        <View>
          <Text>{song[change].name}</Text>
          <Text onPress={() => Linking.openURL(song[change].prevUrl)}>
            prev
          </Text>
          <Button onPress={() => setChange(change - 1)} title="prev" />
          <Button onPress={() => setChange(change + 1)} title="next" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoggedInPage;
