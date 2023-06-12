import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  isNew: boolean;
  count: number;
  newColor: string;
  title: string;
  icon: any;
  bgColor: string;
  onClick: () => void;
};
const CommonCard = (props: Props) => {
  return (
    <View style={{width: '100%', height: 70, justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          width: '96%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: props.bgColor ? props.bgColor : '#fff',
        }}
        onPress={() => {
          props.onClick();
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={props.icon}
            style={{
              width: 24,
              height: 24,
              marginLeft: 10,
              tintColor: props.bgColor ? 'red' : '#6D6D6D',
            }}
          />
          <Text
            style={{
              marginLeft: 20,
              fontWeight: '600',
              color: props.bgColor ? 'red' : '#6D6D6D',
              fontSize: 16,
            }}>
            {props.title}
          </Text>
        </View>
        {props.count && (
          <View
            style={{
              backgroundColor: props.newColor
                ? props.newColor
                : props.bgColor
                ? props.bgColor
                : '#fff',
              height: 35,
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              marginRight: 10,
            }}>
            <Text
              style={{
                color: props.isNew ? '#fff' : props.bgColor ? 'red' : '#000',
                fontWeight: '600',
                fontSize: 16,
              }}>
              {props.count}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CommonCard;
