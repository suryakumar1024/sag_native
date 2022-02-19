import React from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './mainScreenStyles';

 const gradientColors=['#4A00E0', '#8E2DE2']
const MainScreen = ({navigation}) => {
  const bmiScreen = () => {
    navigation.navigate('bmi');
  };
  return (
    <View style={style.mainContainer}>
      <StatusBar hidden={true} />
      <LinearGradient
        style={style.lgBg}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={gradientColors}>
        <View style={style.upperContainer}>
          <Text style={[style.header, style.stay]}>STAY</Text>
          <Text style={[style.header, style.fit]}>FIT.</Text>
          <Text style={style.details}>calculate your bmi</Text>
        </View>
        <View style={style.bottomContainer}>
          <LinearGradient
            style={style.lgStart}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            colors={gradientColors}>
            <TouchableOpacity onPress={bmiScreen}>
              <View style={style.startButton}>
                <Text style={style.start}>Start</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MainScreen;
