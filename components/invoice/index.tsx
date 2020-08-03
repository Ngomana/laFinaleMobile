import React from 'react';
import {StyleSheet, View} from 'react-native';
import InvoiceListView from './invoiceListView';

const InvoiceScreen = () => {
  return (
    <View style={styles.body}>
      <InvoiceListView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default InvoiceScreen;
