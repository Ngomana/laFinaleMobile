import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomerView from './CustomerList';

const CustomerScreen = () => {
  return (
    <View style={styles.body}>
      <CustomerView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default CustomerScreen;
