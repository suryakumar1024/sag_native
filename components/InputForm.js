import React from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./InputFormStyle";
import { StatusBar } from "expo-status-bar";

const InputForm = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={require("../media/Bot-img.jpg")} />

      <View style={styles.inputCointainer}>
        <Text style={styles.login}>login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={"#ffffff"}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor={"#ffffff"}
        />
        <Button
          style={styles.button}
          color={"#66BDD5"}
          title={"login"}
        ></Button>
      </View>

      <View style={styles.regPara}>
        <Text style={styles.para}>dont have an accout? </Text>
        <TouchableOpacity onPress={props.onReg}>
          <Text style={styles.para}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputForm;
