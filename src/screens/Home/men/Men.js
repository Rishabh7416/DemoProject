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
import SliderBanner from '../../Home/sliderBanner/SliderBanner';
import Story from '../story/Story';
import FullSliderBanner from '../fullSliderBanner/FullSliderBanner';
import {HomeMenAction} from '../../../redux/home/Action';
import * as Sentry from '@sentry/react-native';

const Men = () => {
  const {MEN_HOME_DATA} = useSelector(STORE => STORE.MenDataReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // persistingData();
    const transaction = Sentry.startTransaction({
      name: 'Men Home Api Call',
    });

    const span = transaction.startChild({
      op: 'Men Home Api Call',
    });

    dispatch(HomeMenAction());

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
        data={MEN_HOME_DATA}
        renderItem={_renderItemA}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default Sentry.withProfiler(React.memo(Men));
