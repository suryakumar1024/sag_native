import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { userAction } from "./store/store";
import { Link, useNavigate } from "react-router-native";


const LoginForm = (props) => {
const [name,setName]= useState('');
const [password,setPassword]= useState('');
const navigate= useNavigate();

const dispatch= useDispatch();
const loginHandler=()=>{
  dispatch(userAction.onLogin({name,password}))
  navigate('/welcome');
}

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
          onChangeText={(e)=>setName(e)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor={"#ffffff"}
          onChangeText={(e)=>setPassword(e)}

        />
        
        <Button
          style={styles.button}
          color={"#66BDD5"}
          title={"login"}
          onPress={loginHandler}
          />
          
      </View>

      <View style={styles.regPara}>
        <Text style={styles.para}>dont have an accout? </Text>
        <TouchableOpacity onPress={()=>navigate('/register')}>
          <Text style={styles.para}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
