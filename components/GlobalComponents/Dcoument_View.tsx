import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DocumentView = ({
  document_no,
  customer_code,
  customer_name,
  document_date,
  vat_amount,
  vat_excluding,
  total_amount,
}: any) => {
  return (
    <View style={styles.body}>
      <Text>Document Number: {document_no}</Text>
      <Text>Date: {document_date}</Text>
      <Text>Customer Code: {customer_code}</Text>
      <Text>Customer Name: {customer_name}</Text>
      <Text>Vat: {vat_amount}</Text>
      <Text>Vat Excluding: {vat_excluding}</Text>
      <Text>Total Amount: {total_amount}</Text>
    </View>
  );
};

export default DocumentView;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
