import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import ContainerComponent from './src';
import {STORE} from './src/redux/store';

export default function App() {
  return (
    <Provider store={STORE}>
      <SafeAreaView style={{flex: 1}}>
        <ContainerComponent/>
      </SafeAreaView>
    </Provider>
  );
}
