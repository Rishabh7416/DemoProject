import {Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, Fragment} from 'react';
import {styles} from '../../../styles/Styles';

export const RadioButton = () => {
  var radioButtonArray = ['Male', 'Female', 'Prefer not to say'];
  const [checked, setChecked] = useState(null);
  return (
    <Fragment>
      {radioButtonArray.map((radioButtonArray, key) => {
        return (
          <Fragment key={radioButtonArray}>
            {checked == key ? (
              <TouchableOpacity
                style={styles.signUpRadioButtonStyle}
                activeOpacity={1}>
                <Image
                  style={styles.signUpImageStyle}
                  source={require('../../../assets/images/button.png')}
                />
                <Text style={{marginHorizontal: 8}}>{radioButtonArray}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.signUpRadioButtonStyle}
                activeOpacity={1}
                onPress={() => {
                  setChecked(key);
                }}>
                <Image
                  style={styles.signUpImageStyle}
                  source={require('../../../assets/images/circle.png')}
                />
                <Text style={{marginHorizontal: 8}}>{radioButtonArray}</Text>
              </TouchableOpacity>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
};