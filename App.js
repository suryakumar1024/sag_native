import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const App = () => {
  const weight = 60;
  const height = 1.52;
  const bmiCalculator=()=>{
   const bmi = weight/(height*height)
   console.log(bmi);
  }
  return (
    <LinearGradient
         style={{flex:1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#4c669f', '#a54343']}>
    <View style={style.mainContainer}>
        <Button onPress={bmiCalculator} title='bmi' />
      </View>
        </LinearGradient>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
