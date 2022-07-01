import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../../../styles/Styles';

/**
 * 
 * @param {*} param0 
 * @returns BannerSection view
 */
const BannerSection = ({data}) => {
  return (
    <View style={styles.categoryBannerContainer}>
      <Image
        source={{uri: data.image_url}}
        style={styles.categoryBannerImage}
      />
      <Text style={styles.categoryBannerTextStyle}>{data?.description}</Text>
    </View>
  );
};

export default React.memo(BannerSection);
