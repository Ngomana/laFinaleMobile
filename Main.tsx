import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Invoice screen
import StackNavigator from "./navigation/StackNavigator";

import { Provider } from "react-redux";
// import store from './redux';
import { store } from "./redux";

//creating sqlite database

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
