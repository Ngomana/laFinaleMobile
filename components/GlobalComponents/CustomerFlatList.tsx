import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomerView from "./CustomerView";
import MainButton from "./MainButton";

const CustomerFlatList = ({ customerData, onPressCustomer }: any) => {
  return (
    <View style={styles.body}>
      <FlatList
        data={customerData}
        keyExtractor={(customerData) => customerData.code.toString()}
        renderItem={({ item: { code, name, email, balance } }) => {
          return (
            <View>
              <CustomerView
                code={code}
                name={name}
                email={email}
                balance={balance}
                buttonPress={() => {
                  onPressCustomer(code, name, email, balance);
                }}
              />
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
