import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getTokenHandler, initLocalNotification, notificationListner, requestUserPermission } from './src/utils/pushnotification_helper';
import PushNotification, { Importance } from 'react-native-push-notification';

const App = () => {
  
  
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: "123456", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    requestUserPermission();
    // getTokenHandler();
    notificationListner();
    initLocalNotification();
    
    // debugger;
    PushNotification.getChannels(function (channel_ids) {
      // check for channel id if not create one
  
      console.log(channel_ids); // ['channel_id_1']
  
      

      
  
    });
  
  }, []);
  
    
  return (
    <View style={styles.container} >
      <Text>push notification tester</Text>
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})