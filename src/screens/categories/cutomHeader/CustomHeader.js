import React from 'react';
import {Text, Image, View} from 'react-native';
import CustomInput from '../../../components/reusable/resuableComponents/CustomInput';
import { styles } from '../../../styles/Styles';

const CategorySubHeader = () => {
  return (
    <View style={styles.subHeaderContainer}>
      <View style={styles.textInputView}>
        <Image
          style={styles.iconStyle}
          source={require('../../../assets/images/search6th.png')}
        />
        <CustomInput
          placeholder="Search..."
          styleTextInput={styles.textInputStyle}
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.categoryBrandView}>
        <View style={styles.categoryTextView}>
          <Image
            style={styles.categoryIconStyle}
            source={require('../../../assets/images/shopping.png')}
          />
          <Text style={styles.categoryText}>{'Categories'}</Text>
        </View>
        <View style={styles.brandTextView}>
          <Image
            style={styles.brandImage}
            source={require('../../../assets/images/brand-thin.png')}
          />
          <Text style={styles.brandsText}>{'Brands'}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(CategorySubHeader);