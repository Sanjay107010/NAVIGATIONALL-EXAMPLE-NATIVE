import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';
type Props = {
  navigation: any;
};
const Parent = (props: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>Screeeeeeennn</Text>
    </View>
  );
  return <DrawerNavigator />;
};

export default Parent;
