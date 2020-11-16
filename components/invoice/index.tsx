import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import DocumentFlatList from "../GlobalComponents/DocumentFlatList";

const InvoiceScreen = () => {
  const invoices = useSelector((state: any) => {
    state.inovices;
  });
  return (
    <View style={styles.body}>
      <DocumentFlatList documentData={invoices} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: "orange",
  },
});

export default InvoiceScreen;
