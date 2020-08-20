import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomerDetailsBanner = ({
  customerCode,
  customerName,
  invoiceDate,
  invoiceNumber,
  invoiceDueDate,
  invoiceDateButton,
  invoiceDueDateButton,
  onPressDateHandler,
}: any) => {
  return (
    <View>
      <View style={styles.body}>
        <View>
          <Text style={styles.heading}>Customer Details:</Text>
          <View style={styles.customer_details}>
            <Text style={styles.text_style}>Code: {customerCode}</Text>
            <Text style={styles.text_style}>Name: {customerName}</Text>
            <Text style={styles.text_style}>Current Balance: R 0.00</Text>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Document Details:</Text>
          <View
            style={{
              marginRight: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <Icon name="add-circle" size={25} color="black" />
              </TouchableOpacity>

              <Text style={styles.text_style} onPress={onPressDateHandler}>
                Invoice Date: {invoiceDate}
              </Text>
            </View>

            {/*<Text style={styles.text_style}>*/}
            {/*  Invoice Number: {invoiceNumber}*/}
            {/*</Text>*/}
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <Icon name="add-circle-outline" size={25} color="#4F8EF7" />
              <Text style={styles.text_style}>Due Date: {invoiceDueDate} </Text>
            </View>
          </View>
        </View>
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
