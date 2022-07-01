import * as Sentry from '@sentry/react-native';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import {useDispatch, useSelector} from 'react-redux';
import WrapperComponent from '../../../components/reusable/resuableComponents/WrapperComponent';
import {styles} from '../../../styles/Styles';
import { kidCategoryAction } from '../../../redux/category/Action';
import CustomVerticalBorder from '../../../components/reusable/resuableComponents/CustomVerticalBorder';
import { vh, vw } from '../../../components/reusable/resuableComponents/Dimensions';

const {height, width} = Dimensions.get('window');

const KidsCategory = () => {
  const dispatch = useDispatch();
  const {KID_CATEGORY_DATA} = useSelector(STORE => STORE.kidCategoryReducer);
  const [dataIndex, setDataIndex] = React.useState(0);

  React.useEffect(() => {
    const transaction = Sentry.startTransaction({
      name: 'Women Category Api Call',
    });

    const span = transaction.startChild({
      op: 'Women Category Api Call',
    });
    
    dispatch(kidCategoryAction())

    span.finish();
    transaction.finish();
  }, []);

  const findDataIndex = index => {
    setDataIndex(index);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginVertical: vh(1)}}>
        <TouchableOpacity
          onPress={() => findDataIndex(index)}
          style={[styles.categoryKeyStyle,
            {
              backgroundColor:dataIndex == index ? item.design.background_color : 'white',
            },
          ]}>
          <Text style={{
              marginHorizontal: vw(10),
              fontSize: 8,
              fontWeight: dataIndex == index ? 'bold' : '300',
              textTransform: 'uppercase',
              color: dataIndex == index ? 'white' : item.design.text_color,
            }}>
            {item.key}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <CustomFlatlist
          data={KID_CATEGORY_DATA}
          renderItem={renderItem}
          bounces = {false}
        />
        <CustomVerticalBorder/>
        <WrapperComponent
          data={KID_CATEGORY_DATA}
          setDataIndex={setDataIndex}
          dataIndex={dataIndex}
        />
      </View>
    </View>
  );
};

export default Sentry.withProfiler(React.memo(KidsCategory));