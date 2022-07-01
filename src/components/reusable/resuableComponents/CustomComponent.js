import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from '../../../styles/Styles';
import {IdentifyComponent} from '../resuableComponents/CustomTopTab'

const CustomComponent = ({item}) => {

  return (
    <React.Fragment>
      <TouchableOpacity onPress={() => {
         console.log(item)
      }}>
        <Text style = {styles.topTabTextStyle}>{item.key}</Text>
      </TouchableOpacity>
      <IdentifyComponent/>
    </React.Fragment>
  );
};

export default CustomComponent;
