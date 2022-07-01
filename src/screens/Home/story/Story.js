import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import {styles} from '../../../styles/Styles';
import {normalize, vh, vw} from '../../../components/reusable/resuableComponents/Dimensions';
import LinearGradient from 'react-native-linear-gradient';

/**
 * 
 * @param {*} param0 
 * @returns Story VIEW
 */
const Story = ({story}) => {
  const _renderItemCircleItemSlider = ({item}) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: vw(5)}}>
        <LinearGradient colors={['#ffded8', '#ff512b']} style = {{borderRadius: normalize(50)}}>
          <View style={styles.renderItemStyle}>
            <Image
              source={{uri: item.image_url}}
              style={{height: '100%', width: '100%', borderRadius: normalize(50)}}
            />
          </View>
        </LinearGradient>
        <Text
          style={{
            fontSize: vw(8.5),
            fontWeight: '300',
            textTransform: 'uppercase',
            marginTop: vh(10)
          }}>
          {item.label}
        </Text>
      </View>
    );
  };
  return (
    <View style={{marginVertical: vw(20)}}>
      <CustomFlatlist
        data={story.items}
        renderItem={_renderItemCircleItemSlider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default React.memo(Story);
