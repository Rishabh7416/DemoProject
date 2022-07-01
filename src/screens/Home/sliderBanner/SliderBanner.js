import {View, Image} from 'react-native';
import React from 'react';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import {styles} from '../../../styles/Styles';


/**
 * 
 * @param {*} param0 
 * @returns SliderBanner view
 */
const SliderBanner = ({bannerSliderWithLabel}) => {
  const renderItem = ({item}) => {
    return (
        <Image style={styles.sliderBannerStyle} source={{uri: item.url}} />
    );
  };

  return (
    <View>
      <CustomFlatlist
        data={bannerSliderWithLabel?.items}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(SliderBanner);
