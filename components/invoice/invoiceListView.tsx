import React from "react";
import { Text, View } from "react-native";
import InvoiceFlatListView from "./invoiceFlatListView";

const InvoiceListView = () => {
  return (
    <View style={{ backgroundColor: "blue" }}>
      <InvoiceFlatListView />
      <Text>Lists Of invoices</Text>
    </View>
  );
};

export default InvoiceListView;
