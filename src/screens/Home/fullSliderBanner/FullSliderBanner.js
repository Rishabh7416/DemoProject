import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {styles} from '../../../styles/Styles';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { vw } from '../../../components/reusable/resuableComponents/Dimensions';

const {height, width} = Dimensions.get('window');

const FullSliderBanner = ({fullSliderBanner}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          style={[
            styles.sliderBannerStyle,
            {
              width: vw(360),
              height: vw(360),
              alignSelf: 'center',
            },
          ]}
          source={{uri: item.url}}
        />
      </View>
    );
  };

  return (
    <View>
      <SwiperFlatList
        data={fullSliderBanner?.items}
        renderItem={renderItem}
        horizontal={true}
        // autoplay={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(FullSliderBanner);
