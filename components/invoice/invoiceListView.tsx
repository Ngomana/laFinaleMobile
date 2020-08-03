import React from 'react';
import {Text, View} from 'react-native';
import InvoiceFlatListView from './invoiceFlatListView';

const InvoiceListView = () => {
  return (
    <View>
      <Text>Lists Of invoices</Text>
      <InvoiceFlatListView />
    </View>
  );
};

export default InvoiceListView;
