import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Button,
  Linking,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";
import style from "./musicPlayerStyle";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";

const Songs = () => {
  const [change, setChange] = useState(0);
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

  const prevHandler = () => {
    if (change === 0) {
      setChange(song.length - 1);
    } else {
      setChange(change - 1);
    }
  };
  const nextHandler = () => {
    if (change === song.length - 1) {
      setChange(0);
    } else {
      setChange(change + 1);
    }
  };
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
        <View style={style.songNameBox} >

        <Text style={style.songName} >{song[change].name}</Text>
        </View>
        <View style={style.audioControl}>
          <Ionicons
            onPress={prevHandler}
            name="play-back-outline"
            size={54}
            color="black"
          />
          <Feather
          style={style.play}
            onPress={() => Linking.openURL(song[change].prevUrl)}
            name="play"
            size={54}
            color="black"
          />
          <Ionicons
            onPress={nextHandler}
            name="play-forward-outline"
            size={54}
            color="black"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Songs;
