import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommonCard from '../common/CommonCard';
import HomeScreen from '../HomeScreen';
// const data = [
//   {
//     title: 'Starred',
//     icon: require('../star.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Snoozed',
//     icon: require('../snooze.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Important',
//     icon: require('../checkbox.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Sent',
//     icon: require('../send.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Scheduled',
//     icon: require('../checkbox.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Outbox',
//     icon: require('../checkbox.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Drafts',
//     icon: require('../checkbox.png'),
//     isNew: false,
//     count: 2,
//   },
//   {
//     title: 'Archieved',
//     icon: require('../checkbox.png'),
//     isNew: false,
//     count: 2,
//   },
// ];
const CustomDrawer = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity onPress={() => (navigation.Navigator = 'HomeScreen')}>
          <Text>Home screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
