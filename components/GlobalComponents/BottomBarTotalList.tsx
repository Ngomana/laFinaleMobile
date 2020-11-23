import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

interface iButtonBarDetails {
  sum_total: number;
  vat_amount: number;
  total_excluding: number;
  customer_name: string;
  customer_balance: number;
  customer_code: string;
}
const BottomBarDocumentDetails = ({
  sum_total,
  vat_amount,
  total_excluding,
  customer_balance,
  customer_code,
  customer_name,
}: iButtonBarDetails) => {
  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Dcoument Details:</Text>
      <View style={styles.customerView}>
        <Text>Customer: </Text>
        <Text>Balance: </Text>
      </View>
      <View style={styles.sub_body}>
        <Text style={styles.text_style}>V.A.T : {vat_amount}</Text>
        <Text style={styles.text_style}>Total Excl: {total_excluding}</Text>
        <Text style={styles.text_style}>Total: {sum_total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "silver",
    height: Platform.select({
      ios: "10%",
      android: "12.5%",
    }),
  },
  customerView: {
    flexDirection: "row",
  },
  sub_body: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  text_style: {
    fontWeight: "200",
    fontSize: 13,
  },
  heading: {
    // textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default BottomBarDocumentDetails;
