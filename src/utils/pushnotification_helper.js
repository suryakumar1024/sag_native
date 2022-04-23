import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }

  getTokenHandler();
}

export const getTokenHandler = async () => {
  let nToken = await AsyncStorage.getItem('pnToken');
  console.log(nToken, 'oldToken');
  if (!nToken) {
    try {
      const tkn = await messaging().getToken();
      if (tkn) {
        await AsyncStorage.setItem('pnToken', tkn);
      }
    } catch (error) {
      console.log(error, 'errors in token');
    }
  }
};

export const notificationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('message in foreground...', remoteMessage);

    PushNotification.localNotification({
      channelId: '123456',
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
  });
};

export const initLocalNotification = () => {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened

    // onNotification: function (notification) {
    //   console.log("NOTIFICATION:", notification);

    //   // process the notification

    //   // // (required) Called when a remote is received or opened, or local notification is opened
    //   // notification.finish(PushNotificationIOS.FetchResult.NoData);
    // },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,
    requestPermissions: true,
  });
};
