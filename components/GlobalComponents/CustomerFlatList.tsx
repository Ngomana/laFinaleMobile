import FloatingButton from "../floatingButton/index";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomerView from "./CustomerView";

interface iCustomer {
  customerData: any;
}
const CustomerFlatList = ({ customerData, onPressCustomer }: any) => {
  return (
    <View style={styles.body}>
      <FlatList
        data={customerData}
        keyExtractor={(customerData) => customerData.customerId.toString()}
        renderItem={({ item: { customerCode, customerName } }) => {
          return (
            <View>
              <View>
                <CustomerView
                  code={customerCode}
                  name={customerName}
                  email={null}
                  balance={null}
                  buttonPress={() => {
                    onPressCustomer(customerCode, customerName);
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default CustomerFlatList;
