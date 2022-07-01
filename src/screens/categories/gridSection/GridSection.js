import {View, Dimensions, Image, Text} from 'react-native';
import React from 'react';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import { vh, vw } from '../../../components/reusable/resuableComponents/Dimensions';

const {height, width} = Dimensions.get('window');

/**
 * 
 * @param {*} param0 
 * @returns GridSection view
 */
const GridSection = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: vw(100),
          width: vw(80) ,
          alignItems: 'center',
          marginVertical: vh(5),
        }}>
        <Image
          source={{uri: item?.image_url}}
          style={{height: vw(62), width: vw(62), borderRadius: vw(31)}}
        />
        <Text style={{fontSize: 10, marginTop: vw(10), textAlign: 'center',}}>{item?.label}</Text>
      </View>
    );
  };

  return (
    <View style={{width: width, marginTop: height/30, marginBottom: vw(10)}}>
      <Text style={{marginBottom: height/70, fontSize: 13.8 ,color: 'grey'}}>{data?.title}</Text>
      <CustomFlatlist
        data={data?.items}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  );
};

export default React.memo(GridSection);
