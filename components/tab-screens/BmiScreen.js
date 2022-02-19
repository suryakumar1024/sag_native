import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Fragment, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './bmiScreenStyles';
import auth from '@react-native-firebase/auth'
//BMI@123
const BmiScreen = () => {
  const [bmi, setBmi] = useState('BMI');
  const [height, setHeight] = useState();
  const [heightIsTouched, setHeightIsTouched] = useState(false);
  const [weight, setWeight] = useState();
  const [heightIsValid, setHeightIsValid] = useState(false);

  const bmiCalculator = () => {
    if (!!height && !!weight && heightIsValid) {
      const bmi = weight / (height * height);
      const roundedBmi = bmi.toFixed(2);
      setBmi(+roundedBmi);
    } else {
      setBmi('Enter value first');
    }
  };
  const heightIsValidHandler = () => {
    if (height <= 3.5) {
      setHeightIsTouched(true);
      setHeightIsValid(true);
    }
    if (height > 3.5) {
      setHeightIsTouched(true);
      setHeightIsValid(false);
    }
  };

  return (
    <Fragment>
      <LinearGradient
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#4A00E0', '#8E2DE2']}>
        <View style={styles.centerBox}>
          <TextInput
            selectionColor={'#000'}
            placeholderTextColor="#ccc"
            onBlur={heightIsValidHandler}
            maxLength={4}
            keyboardType="numeric"
            placeholder="Heightd in m (eg:1.75)"
            style={styles.textInput}
            value={height}
            onChangeText={e => setHeight(e)}
          />
          {!heightIsValid && heightIsTouched && (
            <Text style={styles.warning}>Enter a valid height in m(175cm=1.75m)</Text>
          )}
          <TextInput
            placeholderTextColor="#ccc"
            maxLength={3}
            keyboardType="numeric"
            placeholder="Weight in kg (eg:65)"
            style={styles.textInput}
            value={weight}
            onChangeText={e => setWeight(e)}
          />
          <Text style={styles.range}>Normal range : 19 to 25</Text>
          <Text style={styles.results}>{bmi}</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.bmiButton}>
            <Text onPress={bmiCalculator} style={styles.calculate}>
              Calculate
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </Fragment>
  );
};

export default BmiScreen;
