import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {
  navigation: any;
};

const Screen3 = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text
        style={{fontSize: 30}}
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        Open Side Drawer
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Screen1')}>
        <Text>press screen1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;
