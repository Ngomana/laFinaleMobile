import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CustomerDetailsBanner = ({
  customerCode,
  customerName,
  invoiceDate,
  invoiceNumber,
  invoiceDueDate,
  invoiceDateButton,
  invoiceDueDateButton,
}: any) => {
  return (
    <View>
      <View style={styles.body}>
        <View>
          <Text style={styles.heading}>Customer Details:</Text>
          <View style={styles.customer_details}>
            <Text style={styles.text_style}>Customer Code: {customerCode}</Text>
            <Text style={styles.text_style}>Customer Name: {customerName}</Text>
            <Text style={styles.text_style}>Current Balance: R 0.00</Text>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Document Details:</Text>
          <View>
            <Text style={styles.text_style}>Invoice Date: {invoiceDate}</Text>
            <Text style={styles.text_style}>
              Invoice Number: {invoiceNumber}
            </Text>
            <Text style={styles.text_style}>Due Date: {invoiceDueDate} </Text>
          </View>
        </View>
      </View>

      <View style={styles.date_body}>
        <Button title={"Invoice Date"} onPress={invoiceDateButton} />
        <Button title={"Due Date"} onPress={invoiceDueDateButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "silver",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sub_body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customer_details: {
    padding: 2,
  },
  heading: {
    fontWeight: "bold",
  },
  date_body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text_style: {
    fontWeight: "200",
  },
});

export default CustomerDetailsBanner;
