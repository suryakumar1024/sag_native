import AsyncStorage from '@react-native-async-storage/async-storage';

export const  storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
      console.log('done');
    } catch (e) {
      // saving error
      console.log('err:',e);
    }
  }

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      // value previously stored
      return  value
    }
  } catch(e) {
    // error reading value
    console.log('err:',e);

  }
}
