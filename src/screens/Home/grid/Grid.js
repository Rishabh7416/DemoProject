import React from 'react';
import {View, Text, Image} from 'react-native';
import {normalize} from '../../../components/reusable/resuableComponents/Dimensions';
import { styles } from '../../../styles/Styles';
import CustomFlatList from '../../../components/reusable/resuableComponents/CustomFlatlist'

const Grid = ({gridData}) => {
  const {items_per_row, image_size, items, header} = gridData;
  const itemWidth = 340 / (items_per_row == 2 ? items_per_row * 1.03 : items_per_row * 1.06);
  const itemHeight = image_size.height * (itemWidth / image_size.width);

  const onRenderGrid = React.useCallback(
    ({item}) => {
      const {url, footer} = item;
      return (
        <View style={styles.gridItemContainer}>
          <Image
            style={[
              styles.gridImage,
              {height: normalize(itemHeight), width: normalize(itemWidth)},
            ]}
            source={{uri: url}}
          />
          {footer?.title != null ? (
            <Text
              style={[
                styles.gridCircleItemTitle,
                {fontWeight: footer?.subtitle != null ? '600' : '300'},
              ]}>
              {footer?.title}
            </Text>
          ) : null}
          {footer?.subtitle != null ? (
            <Text style={styles.gridCircleItemFooter}>{footer?.subtitle}</Text>
          ) : null}
        </View>
      );
    },
    [gridData],
  );

  return (
    <View style={styles.gridContainer}>
      {header != null && <Text style={styles.gridHeader}>{header?.title}</Text>}
      <CustomFlatList
        data={items}
        scrollEnabled={false}
        renderItem={onRenderGrid}
        numColumns={items_per_row}
        keyExtractor={item => {
          item.tag
        }}
      />
    </View>
  );
}

export default React.memo(Grid);