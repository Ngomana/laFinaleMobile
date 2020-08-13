import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InvoiceFlatListView from "./invoiceFlatListView";

const InvoiceListView = () => {
  return (
    <View style={styles.body}>
      <InvoiceFlatListView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#2983F1",
  },
});

export default InvoiceListView;
