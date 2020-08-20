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
    backgroundColor: "white",
    margin: 5,
  },
});

export default CustomerView;
