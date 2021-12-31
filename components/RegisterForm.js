import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";
import styles from "./InputFormStyle";
const RegisterForm = (props) => {
const navigate= useNavigate();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={require("../media/Bot-img.jpg")} />

      <View style={styles.inputCointainer}>
        <Text style={styles.login}>sign up</Text>
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
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="confirm password"
          placeholderTextColor={"#ffffff"}
        />
        <Button
          style={styles.button}
          color={"#66BDD5"}
          title={"sign up"}
        ></Button>
      </View>

      <View style={styles.regPara}>
        <Text style={styles.para}>already have an accout? </Text>
        <TouchableOpacity onPress={()=>navigate('/login')}>
          <Text style={styles.para}>login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
