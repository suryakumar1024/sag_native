import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './mainScreenStyles';

const MainScreen = ({navigation}) => {
  const bmiScreen = () => {
    navigation.navigate('bmi');
  };
  return (
    <View style={style.mainContainer}>
      <LinearGradient
        style={{
          flex: 1,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#4A00E0', '#8E2DE2']}>
        <View style={style.upperContainer}>
          <Text style={[style.header, style.stay]}>STAY</Text>
          <Text style={[style.header, style.fit]}>FIT.</Text>
          <Text style={style.details}>calculate your bmi</Text>
        </View>
        <View style={style.bottomContainer}>
          <TouchableOpacity onPress={bmiScreen}>
            <LinearGradient
              style={{
                borderRadius: 30,
                elevation: 15,
                shadowColor: '#4A00E0',
              }}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}
              colors={['#4A00E0', '#8E2DE2']}>
              <View style={style.startButton}>
                <Text style={style.start}>Start</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MainScreen;
