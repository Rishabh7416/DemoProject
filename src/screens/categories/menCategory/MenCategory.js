import * as Sentry from '@sentry/react-native';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import CustomFlatlist from '../../../components/reusable/resuableComponents/CustomFlatlist';
import {useDispatch, useSelector} from 'react-redux';
import WrapperComponent from '../../../components/reusable/resuableComponents/WrapperComponent';
import {styles} from '../../../styles/Styles';
import {menCategoryAction} from '../../../redux/category/Action';
import CustomVerticalBorder from '../../../components/reusable/resuableComponents/CustomVerticalBorder';
import { vh } from '../../../components/reusable/resuableComponents/Dimensions';
const {height, width} = Dimensions.get('window');

const MenCategory = () => {
  const dispatch = useDispatch();
  const {MEN_CATEGORY_DATA} = useSelector(STORE => STORE.menCategoryReducer);
  const [dataIndex, setDataIndex] = React.useState(0);

  React.useEffect(() => {
    const transaction = Sentry.startTransaction({
      name: 'Women Category Api Call',
    });

    const span = transaction.startChild({
      op: 'Women Category Api Call',
    });
    
    dispatch(menCategoryAction());

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
          style={[
            styles.categoryKeyStyle,
            {
              backgroundColor:
                dataIndex == index ? item.design.background_color : 'white',
            },
          ]}>
          <Text
            style={[
              styles.keyTextStyle,
              {
                fontWeight: dataIndex == index ? 'bold' : '300',
                color: dataIndex == index ? 'white' : item.design.text_color,
              },
            ]}>
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
          data={MEN_CATEGORY_DATA}
          renderItem={renderItem}
          bounces={false}
        />
        <CustomVerticalBorder />
        <WrapperComponent
          data={MEN_CATEGORY_DATA}
          setDataIndex={setDataIndex}
          dataIndex={dataIndex}
        />
      </View>
    </View>
  );
};

export default Sentry.withProfiler(React.memo(MenCategory));
