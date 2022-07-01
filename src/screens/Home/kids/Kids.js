import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from '../../../styles/Styles';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import {useDispatch, useSelector} from 'react-redux';
import Banner from '../banner/Banner';
import Grid from '../grid/Grid';
import SliderBanner from '../sliderBanner/SliderBanner';
import Story from '../story/Story';
import FullSliderBanner from '../fullSliderBanner/FullSliderBanner';
import {HomeKidsAction} from '../../../redux/home/Action';

const Kids = () => {
  const {KID_HOME_DATA} = useSelector(STORE => STORE.KidDataReducer);
  console.log('KID_HOME_DATA', KID_HOME_DATA);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(HomeKidsAction());
  }, []);

  const _renderItemA = ({item, index}) => {
    switch (item.type) {
      case 'banner':
        return <Banner bannerData={item} />;
      case 'grid':
        return <Grid headerTitle={item.header} gridData={item} />;
      case 'bannerSliderWithLabel':
        return <SliderBanner bannerSliderWithLabel={item} />;
      case 'circleItemSlider':
        return <Story story={item} />;
      case 'fullWidthBannerSlider':
        return <FullSliderBanner fullSliderBanner={item} />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <CustomFlatlist
        data={KID_HOME_DATA}
        renderItem={_renderItemA}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default React.memo(Kids);
