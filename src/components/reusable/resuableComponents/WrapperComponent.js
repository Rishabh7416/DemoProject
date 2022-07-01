import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import CustomFlatlist from './CustomFlatlist';
import BannerSection from '../../../screens/categories/bannerSection/BannerSection';
import GridSection from '../../../screens/categories/gridSection/GridSection';
import SliderSection from '../../../screens/categories/sliderSection/SliderSection';
import {vw} from './Dimensions';

/**
 *
 * @param {*} param0
 * @returns view
 */
const WrapperComponent = ({dataIndex, data, setDataIndex}) => {
  /**
   *
   * @param {*} param0
   * @returns components
   */
  const renderItem = ({item}) => {
    switch (item.type) {
      case 'banner':
        return <BannerSection data={item} />;
      case 'slider':
        return <SliderSection data={item} />;
      case 'grid':
        return <GridSection data={item} />;
    }
  };

  return (
    <View style={{width: vw(250)}}>
      <CustomFlatlist
        data={data[dataIndex]?.data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default WrapperComponent;
