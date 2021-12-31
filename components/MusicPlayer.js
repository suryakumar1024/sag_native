import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { View, Text, Button, Linking } from "react-native";
import { useNavigate } from "react-router-native";



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
    <View>
      <Text>{song[change].name}</Text>
      <Text onPress={() => Linking.openURL(song[change].prevUrl)}>play</Text>
      <Button onPress={prevHandler} title="prev" />
      <Button onPress={nextHandler} title="next" />
      <Button onPress={returnHome} title="home" />
    </View>
  );
};

export default Songs;
