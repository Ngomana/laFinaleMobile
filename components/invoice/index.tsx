import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import InvoiceListView from "./invoiceListView";
import { createRxDatabase, RxDatabase } from "rxdb";

const InvoiceScreen = () => {
  useEffect(() => {
    const db = createRxDatabase({
      name: "testingDb",
      adapter: "idb",
    });

    console.log(db);
  }, []);
  return (
    <View style={styles.body}>
      <InvoiceListView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "orange",
  },
});

export default InvoiceScreen;
