import React from "react";
import { useEffect, useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Audio } from "expo-av";
import { Feather, Ionicons } from "@expo/vector-icons";
import style from "./musicPlayerStyle";

const AudioControls = (props) => {
  const [change, setChange] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playBackObj, setPlayBackObj] = useState(null);
  const [playBackStatus, setPlayBackStatus] = useState(null);

  const prevHandler = async () => {
    if (change === 0) {
      setChange(props.song.length - 1);
    } else {
      setChange(change - 1);
    }
    //for more than one skip error
    if (playBackStatus === null) {
      return;
    }
    if (playBackStatus.isLoaded) {
      await playBackObj.unloadAsync();
    }

    setPlayBackStatus(null);
    setIsPlaying(false);
  };
  const nextHandler = async () => {
    if (change === props.song.length - 1) {
      setChange(0);
    } else {
      setChange(change + 1);
    }
    //for more than one skip error
    if (playBackStatus === null) {
      return;
    }
    if (playBackStatus.isLoaded) {
      await playBackObj.unloadAsync();
    }

    setPlayBackStatus(null);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (playBackObj === null) {
      setPlayBackObj(new Audio.Sound());
    }
  }, []);
  const playSong = async () => {
    ///  play song ///
    if (playBackObj !== null && playBackStatus === null) {
      const status = await playBackObj.loadAsync(
        { uri: props.song[change].prevUrl },
        { shouldPlay: true }
      );
      setIsPlaying(true);
      console.log(status);
      return setPlayBackStatus(status);
    }
    /// pause song ///
    if (playBackStatus.isPlaying) {
      const status = await playBackObj.pauseAsync();
      setIsPlaying(false);
      return setPlayBackStatus(status);
    }
    /// resume song ///
    if (!playBackStatus.isPlaying) {
      const status = await playBackObj.playAsync();
      setIsPlaying(true);
      console.log(status);
      return setPlayBackStatus(status);
    }
  };
  return (
    <Fragment>
      <View style={style.songNameBox}>
        <Text style={style.songName}>{props.song[change].name}</Text>
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
          onPress={playSong}
          // onPress={() => Linking.openURL(song[change].prevUrl)}
          name={isPlaying ? "pause" : "play"}
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
    </Fragment>
  );
};

export default AudioControls;
