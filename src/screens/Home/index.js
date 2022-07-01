import {ScrollView, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/reusable/resuableComponents/CustomHeader';
import CustomTopTab from '../../components/reusable/resuableComponents/CustomTopTab';
import Men from '../Home/men/Men';
import Women from '../Home/women/Women';
import Kids from '../Home/kids/Kids';
import CustomFlatlist from '../../components/reusable/resuableComponents/CustomFlatlist';

const Home = () => {
  const [focusedScreen, setFocusedScreen] = React.useState('Women');

  const screenIteration = () => {
    switch (focusedScreen) {
      case 'Women':
        return (
          <React.Fragment>
            <CustomHeader/>
            <CustomTopTab
              focusedScreen={focusedScreen}
              setFocusedScreen={setFocusedScreen}
            />
            <Women />
          </React.Fragment>
        );
      case 'Men':
        return (
          <React.Fragment>
            <CustomHeader/>
            <CustomTopTab
              focusedScreen={focusedScreen}
              setFocusedScreen={setFocusedScreen}
            />
            <Men />
          </React.Fragment>
        );
      case 'Kids':
        return (
          <React.Fragment>
            <CustomHeader/>
            <CustomTopTab
              focusedScreen={focusedScreen}
              setFocusedScreen={setFocusedScreen}
            />
            <Kids />
          </React.Fragment>
        );
    }
  };

  return (
      <View>
        <CustomFlatlist
          data={[screenIteration()]}
          renderItem={() => {
            return screenIteration();
          }}
          showsVerticalScrollIndicator={false}
          bounces = {false}
        />
      </View>
  );
};

export default React.memo(Home);
