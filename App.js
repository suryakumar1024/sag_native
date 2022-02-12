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
    <View style={style.mainContainer}>
         <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#4c669f', '#3b5998']}>
        <Button onPress={bmiCalculator} title='bmi' />
        </LinearGradient>
      </View>
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
