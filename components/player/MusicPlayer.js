import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigate } from "react-router-native";
import style from "./musicPlayerStyle";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import AudioControls from "./AudioControls";

const Songs = () => {
  ///  songs are not fetched from spotify api
  
  const songs = useSelector((state) => state.user.songs);
  const navigate = useNavigate();

  const song = songs.map((song) => {
    return {
      id: song.track.id,
      name: song.track.name,
      prevUrl: song.track.preview_url,
      songUrl: song.track.external_urls.spotify,
    };
  });

  const returnHome = () => {
    navigate("/");
  };

 
  return (
    <SafeAreaView style={style.container}>
      <View style={style.innerContainer}>
        <View style={style.topBar}>
          <TouchableOpacity style={style.home} onPress={returnHome}>
            <AntDesign style={style.home} name="home" size={34} color="black" />
          </TouchableOpacity>
          <Text style={style.musicTopLabel}>Music player</Text>
        </View>

        <View style={style.playerImage}>
          <MaterialCommunityIcons
            name="music-circle-outline"
            size={220}
            color="black"
          />
        </View>

        <AudioControls song={song} />
      </View>
    </SafeAreaView>
  );
};
export const song = Songs.song;
export default Songs;
