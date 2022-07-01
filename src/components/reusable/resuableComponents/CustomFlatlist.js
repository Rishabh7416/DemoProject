import {FlatList} from 'react-native';
import React from 'react';

const CustomFlatlist = ({
  data,
  renderItem,
  horizontal,
  showsHorizontalScrollIndicator,
  contentContainerStyle,
  numColumns,
  listHeaderComponent,
  ItemSeparatorComponent,
  ListHeaderComponent,
  bounces,
  showsVerticalScrollIndicator,
  style,
  keyExtractor,
  scrollEnabled
}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      contentContainerStyle={contentContainerStyle}
      numColumns={numColumns}
      listHeaderComponent={listHeaderComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      bounces={bounces}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      style={style}
      keyExtractor={keyExtractor}
      scrollEnabled = {scrollEnabled}
    />
  );
};

export default CustomFlatlist;
