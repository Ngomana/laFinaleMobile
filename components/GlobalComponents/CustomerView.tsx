import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomerView = ({ code, name, email, balance, buttonPress }: any) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={buttonPress}>
        <Text>Code: {code}</Text>
        <Text>Name: {name}</Text>
        <Text>E-Mail: {email}</Text>
        <Text>Balance: {balance}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    padding: 10,
  },
});

export default CustomerView;
