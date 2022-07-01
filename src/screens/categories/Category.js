import * as Sentry from '@sentry/react-native';
import React from 'react';
import WomenCategory from '../../screens/categories/womenCategory/WomenCategory';
import MenCategory from '../../screens/categories/menCategory/MenCategory';
import KidsCategory from '../../screens/categories/kidsCategory/KidsCategory';
import CustomTopTab from '../../components/reusable/resuableComponents/CustomTopTab';
import CustomHeader from './cutomHeader/CustomHeader';

function Category() {
  const [focusedScreen, setFocusedScreen] = React.useState('Women');

  const screenIteration = focusedScreen => {
    switch (focusedScreen) {
      case 'Women':
        return <WomenCategory />;
      case 'Men':
        return <MenCategory />;
      case 'Kids':
        return <KidsCategory />;
    }
  };

  return (
    <React.Fragment>
      <CustomTopTab
        focusedScreen={focusedScreen}
        setFocusedScreen={setFocusedScreen}
      />
      <CustomHeader />
      {screenIteration(focusedScreen)}
    </React.Fragment>
  );
}

export default Sentry.withProfiler(React.memo(Category))