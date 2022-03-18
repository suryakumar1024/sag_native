import {StyleSheet, Text, View} from 'react-native';
import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.calendar}>
      <Calendar
      firstDay={5}
        onDayPress={day => {
          console.log('selected day', day);
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
  },
});
