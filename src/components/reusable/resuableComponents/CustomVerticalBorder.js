import {View} from 'react-native';
import React from 'react';
import { vh, vw } from './Dimensions';

const CustomVerticalBorder = () => {
  return (
    <View
      style={{
        marginTop: vh(4.5),
        height: vh(610),
        borderRightWidth: 1,
        backgroundColor: 'red',
        marginRight: vw(17.7),
        borderColor: 'lightgrey',
      }}
    />
  );
};

export default CustomVerticalBorder;
