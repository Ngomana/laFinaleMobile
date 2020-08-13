import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const BottomBarDocumentDetails = ({
  sum_total,
  vat_amount,
  total_excluding,
}: any) => {
  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Invoice Totals:</Text>
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
    height: "10%",
    backgroundColor: "silver",
    padding: 5,
  },
  sub_body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text_style: {
    fontWeight: "200",
    fontSize: 15,
  },
  heading: {
    // textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default BottomBarDocumentDetails;
