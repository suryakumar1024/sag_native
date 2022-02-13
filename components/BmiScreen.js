import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './bmiScreenStyles';

const BmiScreen = ({navigation}) => {
  const [bmi, setBmi] = useState('BMI');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const bmiCalculator = () => {
    if (!!height && !!weight) {
      const bmi = weight / (height * height);
      const roundedBmi = bmi.toFixed(2);
      setBmi(+roundedBmi);
      
    } else {
      setBmi('Enter value first');
    }
  };

  return (
    <Fragment>
      <LinearGradient
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#4A00E0', '#8E2DE2']}>
        {/* <ScrollView  > */}
        <View style={styles.centerBox}>
          <TextInput
            keyboardType="numeric"
            placeholder="Height in m"
            style={styles.textInput}
            value={height}
            onChangeText={e => setHeight(e)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Weight in kg"
            style={styles.textInput}
            value={weight}
            onChangeText={e => setWeight(e)}
          />
          <Text style={styles.range}>Normal range : 19 to 25</Text>
          <Text style={styles.results}>{bmi}</Text>
        </View>

        {/* </ScrollView> */}
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
