import {View, Image, Text, Dimensions} from 'react-native';
import React from 'react';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import { styles } from '../../../styles/Styles';
import { vh, vw } from '../../../components/reusable/resuableComponents/Dimensions';

const {height, width} = Dimensions.get('window')

/**
 * 
 * @param {*} param0 
 * @returns SliderSection view
 */
const SliderSection = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.sliderSectionContainer}>
        <Image
          source={{uri: item?.image_url}}
          style={{height: vw(62), width: vw(62), borderRadius: 32.5}}
        />
        <Text style={styles.sliderSectionLabel}>
          {item?.label}
        </Text>
      </View>
    );
  };

  return (
    <View style = {{marginTop: height / 25}}>
      <Text style={{color: 'grey'}}>{data?.title}</Text>
      <CustomFlatlist
        data={data?.items}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default React.memo(SliderSection);
