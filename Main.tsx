import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableMapSet} from 'immer';

//Invoice screen
import StackNavigator from './navigation/StackNavigator';

import {Provider} from 'react-redux';
// import store from './redux';
import {store} from './redux';
enableMapSet();

const MainAppEntry = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default MainAppEntry;
