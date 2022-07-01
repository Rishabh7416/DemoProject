import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/Styles';

export default function Profile({navigation}) {
  return (
    <View>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={{
          uri: 'https://www.inditex.com/documents/10279/240433/Video+Zara+FW19.jpg/db050e34-d93e-b29f-a8e4-f4df2807bef6?t=1564134239153',
        }}>
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <View style={styles.socialBtcontainernStyle}>
            <TouchableOpacity style={styles.ProfileFbBtn}>
              <Image
                style={{height: 20, width: 20}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/20/20837.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProfileFbBtn}>
              <Image
                style={{height: 20, width: 20}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077042.png',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              marginVertical: 20,
              fontSize: 13,
              color: 'white',
            }}>
            FOLLOW THE LATEST TREND
          </Text>
          <TouchableOpacity
            style={styles.registerButtonStyle}
            onPress={() => {
              navigation.navigate('AuthenticationRoute');
            }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              SIGN IN OR REGISTER
            </Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Sign in for a tailored shopping experience
          </Text>
          <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
            Let's get personal
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
