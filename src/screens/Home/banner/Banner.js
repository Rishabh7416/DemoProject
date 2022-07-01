import {View, Image} from 'react-native';
import React from 'react';
import { styles } from '../../../styles/Styles';

const Banner = ({bannerData}) => {
  const height = bannerData.items[0].height;
  const width = bannerData.items[0].width;
  return (
    <React.Fragment>
      <Image
        source={{uri: bannerData.items[0].url}}
        style={[styles.bannerBoxStyle, {height: height * (360 / width)}]}
      />
      {/* <Text>{bannerData}</Text> */}
    </React.Fragment>
  );
};

export default React.memo(Banner);