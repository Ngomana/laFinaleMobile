import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const BottomBarDocumentDetails = ({
  sum_total,
  vat_amount,
  total_excluding,
}) => {
  return (
    <View style={{ height: "10%", backgroundColor: "silver" }}>
      <Text>Total Amount: {sum_total}</Text>
      <Text>Vat Amount: {vat_amount}</Text>
      <Text>Total Excluding Vat: {total_excluding}</Text>
    </View>
  );
};

export default BottomBarDocumentDetails;
