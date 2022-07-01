import React from 'react';
import CustomFlatlist from './CustomFlatlist';
import {View, Text, TouchableOpacity} from 'react-native';
import {vh} from './Dimensions';

const CustomTopTab = ({focusedScreen, setFocusedScreen}) => {
  const Data = ['Women', 'Men', 'Kids'];
  const [dataIndex, setDataIndex] = React.useState(0);

  const ItemSet = (item, index) => {
    setFocusedScreen(item);
    setDataIndex(index);
  };

  const Identifier = () => {
    return <View style={{borderWidth: 1, marginTop: vh(6)}} />;
  };

  const renderItem = ({item, index}) => {
    console.log('index', index);
    return (
      <TouchableOpacity
        onPress={() => ItemSet(item, index)}
        style={{marginHorizontal: 20}}>
        <Text
          style={{
            letterSpacing: 0.5,
            fontWeight: dataIndex == index ? '600' : '300',
          }}>
          {item}
        </Text>
        {dataIndex == index ? <Identifier /> : null}
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: vh(10.5)
      }}>
      <CustomFlatlist
        data={Data}
        contentContainerStyle={{backgroundColor: 'white'}}
        horizontal={true}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CustomTopTab;
