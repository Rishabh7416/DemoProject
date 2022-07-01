import {TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, styles, title, titleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <Text style={titleStyle}>
        {title}
      </Text>
      <Image />
    </TouchableOpacity>
  );
};

export default CustomButton;