import {View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../../styles/Styles';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import {useDispatch, useSelector} from 'react-redux';
import Banner from '../banner/Banner';
import Grid from '../grid/Grid';
import SliderBanner from '../sliderBanner/SliderBanner';
import Story from '../story/Story';
import FullSliderBanner from '../fullSliderBanner/FullSliderBanner';
import {HomeWomenAction} from '../../../redux/home/Action';
import * as Sentry from '@sentry/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @returns WOMEN_HOME_DATA view
 */

const Women = () => {
  const {WOMEN_HOME_DATA} = useSelector(STORE => STORE.WomenDataReducer);
  const dispatch = useDispatch();

  let STORAGE_KEY = JSON.stringify(WOMEN_HOME_DATA);

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        dispatch(HomeWomenAction());
      }
    } catch (e) {
      alert('catch block');
    }
  };

  const storeUser = async () => {
    let STORAGE_KEY = JSON.stringify(WOMEN_HOME_DATA);
    try {
      await AsyncStorage.setItem('user', JSON.stringify(STORAGE_KEY));
      console.log('useEffect try block WOMEN_HOME_DATA', WOMEN_HOME_DATA);
    } catch (error) {
      alert('catch');
    }
  };

  useEffect(() => {
    const transaction = Sentry.startTransaction({
      name: 'Women Home Api Call',
    });

    const span = transaction.startChild({
      op: 'Women Home Api Call',
    });

    // readData();
    dispatch(HomeWomenAction());

    span.finish();
    transaction.finish();
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
        data={WOMEN_HOME_DATA}
        renderItem={_renderItemA}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default Sentry.withProfiler(React.memo(Women));
