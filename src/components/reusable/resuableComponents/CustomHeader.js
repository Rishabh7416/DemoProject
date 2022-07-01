import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../../styles/Styles';

const CustomHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/images/mainLogo.png')}
        style={styles.mainLogoStyle}
      />
      <Image
        source={require('../../../assets/images/notification.png')}
        style={styles.headerBellIconStyle}
      />
      <Image
        source={require('../../../assets/images/cart-gray.png')}
        style={styles.headerShopIconStyle}
      />
      <TouchableOpacity style={styles.searchBarStyle}>
        <Image
          source={require('../../../assets/images/search6th.png')}
          style={styles.searchIconStyle}
        />
        <Image
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/59/59116.png'}}
          style={styles.micIconStyle}
        />
        <Text style={{fontSize: 13, marginLeft: 5, color: '#414141', fontWeight: '300'}}>
          What are you looking for?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CustomHeader);
